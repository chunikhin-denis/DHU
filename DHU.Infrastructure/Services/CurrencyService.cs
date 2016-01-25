using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using DHU.Infrastructure.Interfaces;
using DHU.Infrastructure.Models;
using Newtonsoft.Json;

namespace DHU.Infrastructure.Services
{
    public class CurrencyService : ICurrencyService
    {
        #region Declarations

        private readonly IRepositoryAsync<CurrencyRate> _currencyRepository = null;

        #endregion

        #region Ctors

        public CurrencyService(IRepositoryAsync<CurrencyRate> currencyRepository)
        {
            _currencyRepository = currencyRepository;
        }

        #endregion

        public void GetLatestRates()
        {
            try
            {
                // Create a request for the URL. 
                WebRequest request = WebRequest.Create("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");

                // Get the response.
                WebResponse response = request.GetResponse();

                // Get the stream containing content returned by the server.
                Stream dataStream = response.GetResponseStream();
                // Open the stream using a StreamReader for easy access.
                StreamReader reader = new StreamReader(dataStream);

                // Read the content.
                string json = reader.ReadToEnd();

                var data = JsonConvert.DeserializeObject<List<CurrencyJson>>(json);
                // Clean up the streams and the response.
                reader.Close();
                response.Close();

                foreach (var item in data.Where(x => x.ccy == "EUR" || x.ccy == "USD"))
                {
                    var last = _currencyRepository.Get().ToList().LastOrDefault(x => x.Currency.Name == item.ccy);
                    if (last == null || last.BuyRate != item.buy || last.SaleRate != item.sale)
                    {
                        //add new row to db
                        CurrencyRate rate = new CurrencyRate()
                        {
                            CurrencyId = item.ccy == "USD" ? 1 : 2,
                            BuyRate = item.buy,
                            SaleRate = item.sale,
                            Date = DateTime.Now
                        };

                        _currencyRepository.AddAsync(rate);
                    }
                }
            }
            catch (Exception e)
            {
            }
        }

        public Dictionary<string, List<double>> GetActualRates()
        {
            var data = _currencyRepository.Get().OrderByDescending(x => x.Id).Take(2);
            var usd = data.FirstOrDefault(x => x.Currency.Name == "USD");
            var eur = data.FirstOrDefault(x => x.Currency.Name == "EUR");
            if (usd != null && eur != null)
                return new Dictionary<string, List<double>>() {
                { "USD", new  List<double> { usd.BuyRate, usd.SaleRate }},
                { "EUR", new  List<double> { eur.BuyRate, eur.SaleRate }}
            };
            else
                return new Dictionary<string, List<double>>();
        }

    }
}

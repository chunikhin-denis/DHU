using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System.Text.RegularExpressions;
using DHU.Infrastructure.Interfaces;
using DHU.Web.Models;

namespace DHU.Web.Controllers
{
    [RoutePrefix("api/Data")]
    public class DataController : ApiController
    {
        #region Declarations

        private readonly IProductRepository _productRepository = null;
        private readonly ICurrencyService _currencyService = null;
        private Dictionary<string, List<double>> _rates;

        #endregion

        #region Ctors

        public DataController(IProductRepository productRepository, ICurrencyService currencyService)
        {
            _productRepository = productRepository;
            _currencyService = currencyService;
        }

        #endregion

        public Dictionary<string, List<double>> Rates
        {
            get
            {
                if (_rates == null)
                {
                    var latestRates = _currencyService.GetActualRates();
                    _rates = latestRates.Count == 0 ? null : latestRates;
                }

                return _rates;
            }
        }

        [HttpPost]
        public async Task<IHttpActionResult> GetProducts(GetProductModel model)
        {
            var data = _productRepository.GetProducts(1).AsEnumerable().Select(x => new ProductViewModel()
            {
                Id = x.Id,
                Title = x.Title,
                CategoryName = x.Category.Name,
                CategoryId = x.CategoryId,
                IsInStock = x.IsInStock,
                Price = x.Price,
                CurrencyName = x.Currency.Name,
                BrandName = x.Brand.Name,
                State = x.State,
                ImagePath = x.ImagePath,
                Description = x.Description,
                Usability = x.Usability.Split(new char[] { '|' }, StringSplitOptions.RemoveEmptyEntries).ToArray(),
                Packing = x.Packing.Split(new char[] { '|' }, StringSplitOptions.RemoveEmptyEntries).ToArray()
            }).ToList();
            return Json(data);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetCurrencyRates()
        {
            return Json(Rates);
        }

    }
}

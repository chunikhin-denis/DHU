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
            var data = _productRepository.GetProducts(model.Brand, model.Categories, model.Search, model.SortType, model.IsInTop).AsEnumerable();

            int count = data.Count();
            try
            {
                var products = data.Select(x => new ProductViewModel()
                {
                    Id = x.Id,
                    Title = x.Title,
                    CategoryName = x.Category.Name,
                    CategoryId = x.CategoryId,
                    IsInStock = x.IsInStock,
                    Price = x.Prices.Min(p => p.Price),
                    CurrencyName = x.Prices!=null ? x.Prices.FirstOrDefault().Currency.Name: String.Empty,
                    BrandName = x.Brand.Name,
                    State = x.State,
                    ImagePath = x.ImagePath,
                    Description = x.Description,
                    Usability = x.Usability.Split(new char[] { '|' }, StringSplitOptions.RemoveEmptyEntries).ToArray(),
                    Packing = x.Prices!=null ? x.Prices.Select(p => p.Package.PackageName + " " + p.Package.Measurements).ToList() : new List<string>()
                }).Skip(model.Skip >= 0 ? model.Skip : 0).Take(model.Take >= 0 ? model.Take : 10).ToList();

                return Json(new LoadProductsViewModel
                {
                    Products = products,
                    SummaryCount = count,
                    CountUnderFilter = count,
                });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetCurrencyRates()
        {
            return Json(Rates);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetProductById(int productId)
        {
            if (productId <= 0)
                return BadRequest();

            var product = _productRepository.Get().FirstOrDefault(x => x.IsActive && x.Id == productId);
            if (product == null)
                return BadRequest();

            return Json(new ProductViewModel()
            {
                Id = product.Id,
                Title = product.Title,
                CategoryName = product.Category.Name,
                CategoryId = product.CategoryId,
                IsInStock = product.IsInStock,
                Prices = product.Prices != null ? product.Prices.Select(p => p.Price).ToList() : new List<double>(),
                CurrencyName = product.Prices != null ? product.Prices.FirstOrDefault().Currency.Name : String.Empty,
                Packing = product.Prices!=null ? product.Prices.Select(p => p.Package.PackageName + " " + p.Package.Measurements).ToList() : new List<string>(),
                BrandName = product.Brand.Name,
                State = product.State,
                ImagePath = product.ImagePath,
                Description = product.Description,
                Color = product.Color,
                TempFrom = product.TemperatureFrom,
                TempTo = product.TemperatureTo,
                Usability = product.Usability.Split(new char[] { '|' }, StringSplitOptions.RemoveEmptyEntries).ToArray(),
            });
        }
    }
}

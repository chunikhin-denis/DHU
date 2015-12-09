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

namespace DHU.Web.Controllers
{
    [RoutePrefix("api/Data")]
    public class DataController : ApiController
    {
        #region Declarations

        private readonly IProductRepository _productRepository = null;

        #endregion

        #region Ctors

        public DataController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        #endregion

        [HttpPost]
        public async Task<IHttpActionResult> GetProducts(GetProductModel model)
        {
            var data = _productRepository.GetProducts(1);
            return Json(data.Select(x => x.Title).ToList());
        }
    }
}

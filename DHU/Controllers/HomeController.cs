using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using DHU.Infrastructure.Interfaces;

namespace DHU.Controllers
{
    public class HomeController : Controller
    {
        #region Declarations

        private readonly IProductRepository _productRepository = null;

        #endregion

        #region Ctors

        public HomeController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public HomeController() { }

        public ActionResult Index()
        {
            var a = _productRepository.Get();
            return View();
        }
        #endregion
    }
}

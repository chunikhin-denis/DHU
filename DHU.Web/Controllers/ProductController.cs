using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DHU.Infrastructure.Interfaces;

namespace DHU.Web.Controllers
{
    public class ProductController : Controller
    {
        #region Declarations

        private readonly IProductRepository _productRepository = null;

        #endregion

        #region Ctors

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        #endregion

        public ActionResult Top()
        {
            var a = _productRepository.Get();
            return View();
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
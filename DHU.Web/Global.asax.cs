using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Text.RegularExpressions;
using DHU.Web.Controllers;
using System.Web.Http;
using FluentScheduler;
using DHU.Web.Code;

namespace DHU.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            TaskManager.Initialize(new CurrencySchedule());
        }

        protected void Application_BeginRequest()
        {
            string delimited = @"[/\\\\]";
            var slashes = Regex.Matches(Request.Url.AbsoluteUri, delimited);
            if (slashes.Count == 3)
                Context.RewritePath("/Product/index");
        }
    }
}

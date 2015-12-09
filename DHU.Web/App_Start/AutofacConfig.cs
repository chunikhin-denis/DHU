using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Reflection;
using Owin;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.Owin;
using Autofac.Integration.WebApi;
using DHU.Infrastructure;
using DHU.Infrastructure.Interfaces;
using DHU.Infrastructure.Repositories;
using DHU.Infrastructure.Services;

namespace DHU.Web
{
    public class AutofacConfig
    {
        public static void Configure(IAppBuilder app)
        {
            var builder = new ContainerBuilder();

            // Register controllers
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterControllers(Assembly.GetExecutingAssembly());

            // Register repositories
            builder.RegisterType<ProductRepository>().As<IProductRepository>();

            // Register services
            builder.RegisterType<CurrencyService>().As<ICurrencyService>();

            // Register data context
            builder.RegisterType<DHUEntities>().InstancePerRequest();
            builder.Register(c => new DHUEntities()).InstancePerLifetimeScope();

            var container = builder.Build();

            // Set the MVC and the WebApi dependency resolver.
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            app.UseAutofacMiddleware(container);
            app.UseAutofacMvc();
        }
    }
}
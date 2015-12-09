using System;
using System.Collections.Generic;
using System.Linq;
using Autofac;
using DHU.Infrastructure;
using DHU.Infrastructure.Interfaces;
using DHU.Infrastructure.Repositories;
using DHU.Infrastructure.Services;
using FluentScheduler;

namespace DHU.Web.Code
{
    public class CurrencySchedule : Registry
    {
        public CurrencySchedule()
        {
            var builder = new ContainerBuilder();

            builder.RegisterType<CurrencyRepository>().As<IRepositoryAsync<CurrencyRate>>();
            builder.RegisterType<CurrencyService>().As<ICurrencyService>();
            builder.RegisterType<DHUEntities>().InstancePerRequest();
            builder.Register(c => new DHUEntities()).InstancePerLifetimeScope();
            var container = builder.Build();

            using (var scope = container.BeginLifetimeScope())
            {
                var service = scope.Resolve<ICurrencyService>();
                //service.GetLatestRates();

                // Schedule a simple task to run at a specific time
                Schedule(() => service.GetLatestRates()).ToRunNow().AndEvery(4).Hours();
               // Schedule(() => Console.WriteLine("Timed Task - Will run every day at 9:15pm: " + DateTime.Now)).ToRunEvery(1).Days().At(21, 15);
            }
        }
    }
}
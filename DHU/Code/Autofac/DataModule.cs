using Autofac;
using DHU.Infrastructure;
using DHU.Infrastructure.Interfaces;
using DHU.Infrastructure.Repositories;

namespace DHU.Code
{
    public class DataModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.Register(c => new DHUEntities()).InstancePerRequest();
            builder.RegisterType<DHUEntities>().InstancePerLifetimeScope();

            builder.RegisterType<ProductRepository>().As<IProductRepository>();

            base.Load(builder);
        }
    }
}
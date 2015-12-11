using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DHU.Web.Startup))]
namespace DHU.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            AutofacConfig.Configure(app);
        }
    }
}

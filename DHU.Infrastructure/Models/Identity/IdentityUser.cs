using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DHU.Infrastructure.Models.Identity
{
    /// <summary>
    /// Custom identity user model for app with Int32 primary key
    /// </summary>
    public class CustomIdentityUser
        : IdentityUser<int, CustomIdentityUserLogin, CustomIdentityUserRole, CustomIdentityUserClaim>, IUser<int>
    {
    }
}

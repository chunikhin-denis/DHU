﻿using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DHU.Infrastructure.Models.Identity
{
    /// <summary>
    /// Custom identity user role model with Int32 primary key
    /// </summary>
    public sealed class CustomIdentityUserRole
        : IdentityUserRole<int>
    {
    }
}

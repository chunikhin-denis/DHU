using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DHU.Infrastructure.Interfaces;

namespace DHU.Infrastructure.Repositories
{
    public class CurrencyRepository : BaseRepository<CurrencyRate>
    {
        public CurrencyRepository(DHUEntities context) : base(context) { }
    }
}
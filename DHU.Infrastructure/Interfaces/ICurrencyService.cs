using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DHU.Infrastructure.Interfaces
{
    public interface ICurrencyService
    {
        void GetLatestRates();
        Dictionary<string, List<double>> GetActualRates();
    }
}

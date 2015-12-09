using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DHU.Infrastructure.Models
{
    public class CurrencyJson
    {
        public string ccy { get; set; } //name
        public string base_ccy { get; set; } // UAH
        public float buy { get; set; }
        public float sale { get; set; }
    }
}

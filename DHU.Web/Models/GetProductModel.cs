using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DHU.Web.Controllers
{
    public class GetProductModel
    {
        public string Brand { get; set; }
        public List<int> Categories { get; set; }
        public string Search { get; set; }
        public int Take { get; set; }
        public int Skip { get; set; }
        public string SortType { get; set; }
        public bool IsInTop { get; set; }
        public bool IsInStock { get; set; }
    }
}

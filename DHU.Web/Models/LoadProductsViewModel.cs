using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DHU.Web.Models
{
    public class LoadProductsViewModel
    {
        public List<ProductViewModel> Products { get; set; }
        public int CountUnderFilter { get; set; }
        public int SummaryCount { get; set; }
    }
}
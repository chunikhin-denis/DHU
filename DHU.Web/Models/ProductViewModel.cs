using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DHU.Infrastructure;

namespace DHU.Web.Models
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string CategoryName { get; set; }
        public int CategoryId { get; set; }
        public bool IsInStock { get; set; }
        public Nullable<double> Price { get; set; }
        public string CurrencyName { get; set; }
        public string BrandName { get; set; }
        public string State { get; set; }
        public string ImagePath { get; set; }
        public string Description { get; set; }
        public string[] Usability { get; set; }
        public string[] Packing { get; set; }
    }
}
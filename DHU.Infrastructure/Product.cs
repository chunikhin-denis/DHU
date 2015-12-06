//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DHU.Infrastructure
{
    using System;
    using System.Collections.Generic;
    
    public partial class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int CategoryId { get; set; }
        public bool IsActive { get; set; }
        public bool IsInStock { get; set; }
        public Nullable<double> Price { get; set; }
        public Nullable<int> CurrencyId { get; set; }
        public int BrandId { get; set; }
        public string State { get; set; }
    
        public virtual Category Category { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual Brand Brand { get; set; }
    }
}

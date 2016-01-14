using DHU.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DHU.Infrastructure.Models;

namespace DHU.Infrastructure.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(DHUEntities context) : base(context) { }

        public IQueryable<Product> GetProducts(string Brand, List<int> Categories, string Search, string SortType, bool IsInTop)
        {
            Search = Search.ToLower();
            var data = _context.Products.ToList().Where(p => p.IsActive &&
                                        (String.IsNullOrEmpty(Brand) || p.Brand.Name == Brand) &&
                                        (Categories == null ? true : Categories.Contains(p.CategoryId)) &&
                                        (String.IsNullOrEmpty(Search) || p.Brand.Name.ToLower().Contains(Search) || p.Category.Name.ToLower().Contains(Search) || p.Description.ToLower().Contains(Search) || p.Title.ToLower().Contains(Search) || p.Usability.ToLower().Contains(Search)) &&
                                        (!IsInTop || p.State == "Top") &&
                                        (SortType == "inStock" ? p.IsInStock : true ));
            switch(SortType)
            {
                case "inStock":
                case "abc":
                    data = data.OrderBy(x => x.Title);
                    break;
                case "low":
                    data = data.OrderBy(x => x.Price);
                    break;
                case "high":
                    data = data.OrderByDescending(x => x.Price);
                    break;
            }

            return data.AsQueryable();
        }
    }
}

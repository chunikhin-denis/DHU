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

        public IQueryable<Product> GetProducts(int categoryId, int take = 10, int skip = 0)
        {
            if (categoryId < 1)
            {
                throw new ArgumentNullException("categoryId");
            }

            skip = skip < 0 ? 0 : skip;
            take = take < 1 ? 10 : take;

            return _context.Products.Where(p => p.CategoryId == categoryId).OrderBy(x => x.Title).Skip(skip).Take(take).AsQueryable();
        }
    }
}

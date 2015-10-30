using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DHU.Infrastructure.Interfaces
{
    public interface IProductRepository : IRepositoryAsync<Product>, IDisposable
    {
        IQueryable<Product> GetProducts(int categoryId, int take = 10, int skip = 0);
    }
}

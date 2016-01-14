using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DHU.Infrastructure.Interfaces
{
    public interface IProductRepository : IRepositoryAsync<Product>, IDisposable
    {
        IQueryable<Product> GetProducts(string Brand, List<int> Categories, string Search, string SortType, bool IsInTop);
    }
}

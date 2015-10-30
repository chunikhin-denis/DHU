using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DHU.Infrastructure.Interfaces
{
    public interface IRepositoryAsync<IEntity> : IDisposable
    {
        IQueryable<IEntity> Get();
        Task AddAsync(IEntity entity);
        Task AddAsync(IEnumerable<IEntity> entities, bool disableAutoDetectChanges);
        Task UpdateAsync(IEntity entity);
        Task DeleteAsync(IEntity entity);
    }
}

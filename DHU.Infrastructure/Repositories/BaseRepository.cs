using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DHU.Infrastructure.Interfaces;

namespace DHU.Infrastructure.Repositories
{
    public abstract class BaseRepository<T>
        : IDisposable,
        IRepositoryAsync<T> where T : class
    {
        #region Declarations

        protected DHUEntities _context = null; //DbContext _context = null;

        /// <summary>
        /// Summary:
        ///  Gets or sets a value indicating whether the System.Data.Entity.Infrastructure.DbChangeTracker.DetectChanges()
        ///  method is called automatically by methods of System.Data.Entity.DbContext
        ///  and related classes.  The default value is true.
        /// </summary>
        public bool AutoDetectChanges
        {
            get
            {
                return _context.Configuration.AutoDetectChangesEnabled;
            }
            set
            {
                _context.Configuration.AutoDetectChangesEnabled = value;
            }
        }

        #endregion

        #region Ctors


        public BaseRepository(DHUEntities context)
        {
            _context = context;
        }

        #endregion

        public virtual IQueryable<T> Get()
        {
            _context = new DHUEntities();
            return _context.Set<T>();
        }


        public virtual async Task AddAsync(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }

            //_context.Set<TEntity>().Add(entity);
            _context.Entry(entity).State = EntityState.Added;

            // _context.Set<TEntity>().Add(entity);
            await _context.SaveChangesAsync();
        }

        public virtual async Task AddAsync(IEnumerable<T> entities, bool disableAutoDetectChanges = false)
        {
            if (entities == null || entities.Count() < 1)
            {
                return;
            }

            _context.Configuration.AutoDetectChangesEnabled = !disableAutoDetectChanges;

            //Parallel.ForEach<TEntity>(entities, async entity => await AddAsync(entity));
            foreach (var entity in entities)
            {
                _context.Entry(entity).State = EntityState.Added;
            }

            if (!_context.Configuration.AutoDetectChangesEnabled)
            {
                _context.ChangeTracker.DetectChanges();
            }

            await _context.SaveChangesAsync();
        }

        public virtual async Task UpdateAsync(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }

            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public virtual async Task DeleteAsync(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }

            int entityId = (entity as IEntity).Id;

            if (entityId < 1)
            {
                return;
                //throw new ArgumentException("Must be more than zero", "id");
            }

            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public virtual void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }

        protected virtual void Dispose(bool disposable)
        {
            if (disposable)
            {
                this.Dispose();
            }
        }
    }
}
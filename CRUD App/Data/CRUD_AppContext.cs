using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CRUD_App.Models;

namespace CRUD_App.Data
{
    public class CRUD_AppContext : DbContext
    {
        public CRUD_AppContext (DbContextOptions<CRUD_AppContext> options)
            : base(options)
        {
        }

        public DbSet<CRUD_App.Models.Product> Product { get; set; } = default!;

        public DbSet<CRUD_App.Models.Category>? Category { get; set; }
    }
}

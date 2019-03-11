using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CoreApi.Models;

namespace CoreApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<AdHocDocumentModel> AdHocDocuments { get; set; }
        public DbSet<DomainModel> Domains { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DomainModel>().HasData(
                DomainModelSeedData.GetData()
            );

            modelBuilder.Entity<AdHocDocumentModel>().HasData(
                AdHocDocumentModelSeedData.GetData()
            );

        }
    }
}

﻿// <auto-generated />
using CoreApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CoreApi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20190311181109_Add Ad Hoc Document Seed Data")]
    partial class AddAdHocDocumentSeedData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CoreApi.Models.AdHocDocumentModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DocumentDescription");

                    b.Property<string>("DocumentName");

                    b.Property<int>("DomainId");

                    b.HasKey("Id");

                    b.ToTable("AdHocDocuments");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            DocumentDescription = "Description of First Ad Hoc Document, First Domain",
                            DocumentName = "First Ad Hoc Document",
                            DomainId = 1
                        },
                        new
                        {
                            Id = 2,
                            DocumentDescription = "Description of Second Ad Hoc Document, First Domain",
                            DocumentName = "Second Ad Hoc Document",
                            DomainId = 1
                        },
                        new
                        {
                            Id = 3,
                            DocumentDescription = "Description of Third Ad Hoc Document, Second Domain",
                            DocumentName = "Third Ad Hoc Document",
                            DomainId = 2
                        },
                        new
                        {
                            Id = 4,
                            DocumentDescription = "Description of Forth Ad Hoc Document, Second Domain",
                            DocumentName = "Forth Ad Hoc Document",
                            DomainId = 2
                        },
                        new
                        {
                            Id = 5,
                            DocumentDescription = "Description of Fifth Ad Hoc Document, Third Domain",
                            DocumentName = "Fifth Ad Hoc Document",
                            DomainId = 3
                        },
                        new
                        {
                            Id = 6,
                            DocumentDescription = "Description of Sixth Ad Hoc Document, Forth Domain",
                            DocumentName = "Sixth Ad Hoc Document",
                            DomainId = 4
                        },
                        new
                        {
                            Id = 7,
                            DocumentDescription = "Description of Seventh Ad Hoc Document, Forth Domain",
                            DocumentName = "Seventh Ad Hoc Document",
                            DomainId = 4
                        },
                        new
                        {
                            Id = 8,
                            DocumentDescription = "Description of Eighth Ad Hoc Document, Forth Domain",
                            DocumentName = "Eighth Ad Hoc Document",
                            DomainId = 4
                        });
                });

            modelBuilder.Entity("CoreApi.Models.DomainModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DomainDescription");

                    b.Property<string>("DomainName");

                    b.HasKey("Id");

                    b.ToTable("Domains");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            DomainDescription = "This is the domain of the first dynamic document repository",
                            DomainName = "First Domain"
                        },
                        new
                        {
                            Id = 2,
                            DomainDescription = "This is the domain of the Second dynamic document repository",
                            DomainName = "Second Domain"
                        },
                        new
                        {
                            Id = 3,
                            DomainDescription = "This is the domain of the Third dynamic document repository",
                            DomainName = "Third Domain"
                        },
                        new
                        {
                            Id = 4,
                            DomainDescription = "This is the domain of the Forth dynamic document repository",
                            DomainName = "Forth Domain"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

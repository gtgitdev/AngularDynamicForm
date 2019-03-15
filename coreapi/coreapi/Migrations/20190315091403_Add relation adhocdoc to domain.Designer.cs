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
    [Migration("20190315091403_Add relation adhocdoc to domain")]
    partial class Addrelationadhocdoctodomain
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
                    b.Property<int>("AdHocDocumentId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DocumentDescription");

                    b.Property<string>("DocumentName");

                    b.Property<int>("DomainId");

                    b.HasKey("AdHocDocumentId");

                    b.HasIndex("DomainId");

                    b.ToTable("AdHocDocuments");

                    b.HasData(
                        new
                        {
                            AdHocDocumentId = 1,
                            DocumentDescription = "Description of First Ad Hoc Document, First Domain",
                            DocumentName = "First Ad Hoc Document",
                            DomainId = 1
                        },
                        new
                        {
                            AdHocDocumentId = 2,
                            DocumentDescription = "Description of Second Ad Hoc Document, First Domain",
                            DocumentName = "Second Ad Hoc Document",
                            DomainId = 1
                        },
                        new
                        {
                            AdHocDocumentId = 3,
                            DocumentDescription = "Description of Third Ad Hoc Document, Second Domain",
                            DocumentName = "Third Ad Hoc Document",
                            DomainId = 2
                        },
                        new
                        {
                            AdHocDocumentId = 4,
                            DocumentDescription = "Description of Forth Ad Hoc Document, Second Domain",
                            DocumentName = "Forth Ad Hoc Document",
                            DomainId = 2
                        },
                        new
                        {
                            AdHocDocumentId = 5,
                            DocumentDescription = "Description of Fifth Ad Hoc Document, Third Domain",
                            DocumentName = "Fifth Ad Hoc Document",
                            DomainId = 3
                        },
                        new
                        {
                            AdHocDocumentId = 6,
                            DocumentDescription = "Description of Sixth Ad Hoc Document, Forth Domain",
                            DocumentName = "Sixth Ad Hoc Document",
                            DomainId = 4
                        },
                        new
                        {
                            AdHocDocumentId = 7,
                            DocumentDescription = "Description of Seventh Ad Hoc Document, Forth Domain",
                            DocumentName = "Seventh Ad Hoc Document",
                            DomainId = 4
                        },
                        new
                        {
                            AdHocDocumentId = 8,
                            DocumentDescription = "Description of Eighth Ad Hoc Document, Forth Domain",
                            DocumentName = "Eighth Ad Hoc Document",
                            DomainId = 4
                        });
                });

            modelBuilder.Entity("CoreApi.Models.DomainModel", b =>
                {
                    b.Property<int>("DomainId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DomainDescription");

                    b.Property<string>("DomainName");

                    b.HasKey("DomainId");

                    b.ToTable("Domains");

                    b.HasData(
                        new
                        {
                            DomainId = 1,
                            DomainDescription = "This is the domain of the first dynamic document repository",
                            DomainName = "First Domain"
                        },
                        new
                        {
                            DomainId = 2,
                            DomainDescription = "This is the domain of the Second dynamic document repository",
                            DomainName = "Second Domain"
                        },
                        new
                        {
                            DomainId = 3,
                            DomainDescription = "This is the domain of the Third dynamic document repository",
                            DomainName = "Third Domain"
                        },
                        new
                        {
                            DomainId = 4,
                            DomainDescription = "This is the domain of the Forth dynamic document repository",
                            DomainName = "Forth Domain"
                        });
                });

            modelBuilder.Entity("CoreApi.Models.DynamicFieldModel", b =>
                {
                    b.Property<int>("DynamicFieldId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AdHocDocumentId");

                    b.Property<string>("ControlGroup");

                    b.Property<int>("ControlSize");

                    b.Property<string>("ControlType");

                    b.Property<string>("FieldKey");

                    b.Property<string>("FieldLabel");

                    b.Property<int>("GroupSize");

                    b.Property<int>("Order");

                    b.Property<bool>("Required");

                    b.Property<string>("Value");

                    b.HasKey("DynamicFieldId");

                    b.HasIndex("AdHocDocumentId");

                    b.ToTable("DynamicFields");
                });

            modelBuilder.Entity("CoreApi.Models.AdHocDocumentModel", b =>
                {
                    b.HasOne("CoreApi.Models.DomainModel", "Domain")
                        .WithMany("AdHocDocuments")
                        .HasForeignKey("DomainId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CoreApi.Models.DynamicFieldModel", b =>
                {
                    b.HasOne("CoreApi.Models.AdHocDocumentModel", "AdHocDocument")
                        .WithMany("DynamicFields")
                        .HasForeignKey("AdHocDocumentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}

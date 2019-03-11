using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreApi.Migrations
{
    public partial class InitialDomainSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Domains",
                columns: new[] { "Id", "DomainDescription", "DomainName" },
                values: new object[,]
                {
                    { 1, "This is the domain of the first dynamic document repository", "First Domain" },
                    { 2, "This is the domain of the Second dynamic document repository", "Second Domain" },
                    { 3, "This is the domain of the Third dynamic document repository", "Third Domain" },
                    { 4, "This is the domain of the Forth dynamic document repository", "Forth Domain" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Domains",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Domains",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Domains",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Domains",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreApi.Migrations
{
    public partial class AddAdHocDocumentSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AdHocDocuments",
                columns: new[] { "Id", "DocumentDescription", "DocumentName", "DomainId" },
                values: new object[,]
                {
                    { 1, "Description of First Ad Hoc Document, First Domain", "First Ad Hoc Document", 1 },
                    { 2, "Description of Second Ad Hoc Document, First Domain", "Second Ad Hoc Document", 1 },
                    { 3, "Description of Third Ad Hoc Document, Second Domain", "Third Ad Hoc Document", 2 },
                    { 4, "Description of Forth Ad Hoc Document, Second Domain", "Forth Ad Hoc Document", 2 },
                    { 5, "Description of Fifth Ad Hoc Document, Third Domain", "Fifth Ad Hoc Document", 3 },
                    { 6, "Description of Sixth Ad Hoc Document, Forth Domain", "Sixth Ad Hoc Document", 4 },
                    { 7, "Description of Seventh Ad Hoc Document, Forth Domain", "Seventh Ad Hoc Document", 4 },
                    { 8, "Description of Eighth Ad Hoc Document, Forth Domain", "Eighth Ad Hoc Document", 4 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "AdHocDocuments",
                keyColumn: "Id",
                keyValue: 8);
        }
    }
}

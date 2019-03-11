using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreApi.Migrations
{
    public partial class renamedadhtohadhocdocuments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_AdH",
                table: "AdH");

            migrationBuilder.RenameTable(
                name: "AdH",
                newName: "AdHocDocuments");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdHocDocuments",
                table: "AdHocDocuments",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_AdHocDocuments",
                table: "AdHocDocuments");

            migrationBuilder.RenameTable(
                name: "AdHocDocuments",
                newName: "AdH");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdH",
                table: "AdH",
                column: "Id");
        }
    }
}

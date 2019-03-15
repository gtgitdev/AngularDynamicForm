using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreApi.Migrations
{
    public partial class Addrelationadhocdoctodomain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_AdHocDocuments_DomainId",
                table: "AdHocDocuments",
                column: "DomainId");

            migrationBuilder.AddForeignKey(
                name: "FK_AdHocDocuments_Domains_DomainId",
                table: "AdHocDocuments",
                column: "DomainId",
                principalTable: "Domains",
                principalColumn: "DomainId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdHocDocuments_Domains_DomainId",
                table: "AdHocDocuments");

            migrationBuilder.DropIndex(
                name: "IX_AdHocDocuments_DomainId",
                table: "AdHocDocuments");
        }
    }
}

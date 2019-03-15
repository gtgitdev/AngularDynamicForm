using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreApi.Migrations
{
    public partial class Dynamicfieldmodelwithrelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Domains",
                newName: "DomainId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "AdHocDocuments",
                newName: "AdHocDocumentId");

            migrationBuilder.CreateTable(
                name: "DynamicFields",
                columns: table => new
                {
                    DynamicFieldId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Value = table.Column<string>(nullable: true),
                    FieldKey = table.Column<string>(nullable: true),
                    FieldLabel = table.Column<string>(nullable: true),
                    Required = table.Column<bool>(nullable: false),
                    Order = table.Column<int>(nullable: false),
                    ControlType = table.Column<string>(nullable: true),
                    ControlSize = table.Column<int>(nullable: false),
                    ControlGroup = table.Column<string>(nullable: true),
                    GroupSize = table.Column<int>(nullable: false),
                    AdHocDocumentId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DynamicFields", x => x.DynamicFieldId);
                    table.ForeignKey(
                        name: "FK_DynamicFields_AdHocDocuments_AdHocDocumentId",
                        column: x => x.AdHocDocumentId,
                        principalTable: "AdHocDocuments",
                        principalColumn: "AdHocDocumentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DynamicFields_AdHocDocumentId",
                table: "DynamicFields",
                column: "AdHocDocumentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DynamicFields");

            migrationBuilder.RenameColumn(
                name: "DomainId",
                table: "Domains",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "AdHocDocumentId",
                table: "AdHocDocuments",
                newName: "Id");
        }
    }
}

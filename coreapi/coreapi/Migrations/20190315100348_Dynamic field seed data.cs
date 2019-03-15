using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreApi.Migrations
{
    public partial class Dynamicfieldseeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "DynamicFields",
                columns: new[] { "DynamicFieldId", "AdHocDocumentId", "ControlGroup", "ControlSize", "ControlType", "FieldKey", "FieldLabel", "FieldOrder", "GroupSize", "Required", "Value" },
                values: new object[] { 1, 1, "", 1, "textbox", "FirstName", null, 1, 0, false, null });

            migrationBuilder.InsertData(
                table: "DynamicFields",
                columns: new[] { "DynamicFieldId", "AdHocDocumentId", "ControlGroup", "ControlSize", "ControlType", "FieldKey", "FieldLabel", "FieldOrder", "GroupSize", "Required", "Value" },
                values: new object[] { 2, 1, "", 1, "textbox", "LastName", null, 2, 0, false, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DynamicFields",
                keyColumn: "DynamicFieldId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "DynamicFields",
                keyColumn: "DynamicFieldId",
                keyValue: 2);
        }
    }
}

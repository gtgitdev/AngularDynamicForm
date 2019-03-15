using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreApi.Models;

namespace CoreApi.Data
{
    public static class DynamicFieldModelSeedData
    {
        public static object[] GetData()
        {
            const string Text = "textbox";

            return new object[]
            {
                new DynamicFieldModel {DynamicFieldId = 1, AdHocDocumentId = 1, FieldKey = "FirstName", Required = false, FieldOrder = 1, ControlType = Text, ControlSize = 1, ControlGroup = string.Empty, GroupSize = 0},
                new DynamicFieldModel {DynamicFieldId = 2, AdHocDocumentId = 1, FieldKey = "LastName", Required = false, FieldOrder = 2, ControlType = Text, ControlSize = 1, ControlGroup = string.Empty, GroupSize = 0},
            };

        }
    }
}

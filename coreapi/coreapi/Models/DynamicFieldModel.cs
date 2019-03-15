using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApi.Models
{
    public class DynamicFieldModel
    {
        [Key]
        public int DynamicFieldId { get; set; }
        public string Value { get; set; }
        public string FieldKey { get; set; }
        public string FieldLabel { get; set; }
        public bool Required { get; set; }
        public int FieldOrder { get; set; }
        public string ControlType { get; set; }
        public int ControlSize { get; set; }
        public string ControlGroup { get; set; }
        public int GroupSize { get; set; }

        public int AdHocDocumentId { get; set; }
        public AdHocDocumentModel AdHocDocument { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApi.Models
{
    public class AdHocDocumentModel
    {
        [Key]
        public int AdHocDocumentId { get; set; }
        public string DocumentName { get; set; }
        public string DocumentDescription { get; set; }
        public List<DynamicFieldModel> DynamicFields { get; set; }

        public int DomainId { get; set; }
        public DomainModel Domain { get; set; }
        
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApi.Models
{
    public class AdHocDocumentModel
    {
        public int Id { get; set; }
        public int DomainId { get; set; }
        public string DocumentName { get; set; }
        public string DocumentDescription { get; set; }
        
    }
}

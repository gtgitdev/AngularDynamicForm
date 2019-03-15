using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApi.Models
{
    public class DomainModel
    {
        [Key]
        public int DomainId { get; set; }
        public string DomainName { get; set; }
        public string DomainDescription { get; set; }

        public List<AdHocDocumentModel> AdHocDocuments { get; set; }

    }
}

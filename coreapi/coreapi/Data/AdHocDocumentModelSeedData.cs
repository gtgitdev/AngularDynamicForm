using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApi.Data
{
    public static class AdHocDocumentModelSeedData
    {
        public static object[] GetData()
        {
            return new object[]
            {
                new {Id = 1, DomainId = 1, DocumentName = "First Ad Hoc Document", DocumentDescription = "Description of First Ad Hoc Document, First Domain"},
                new {Id = 2, DomainId = 1, DocumentName = "Second Ad Hoc Document", DocumentDescription = "Description of Second Ad Hoc Document, First Domain"},
                new {Id = 3, DomainId = 2, DocumentName = "Third Ad Hoc Document", DocumentDescription = "Description of Third Ad Hoc Document, Second Domain"},
                new {Id = 4, DomainId = 2, DocumentName = "Forth Ad Hoc Document", DocumentDescription = "Description of Forth Ad Hoc Document, Second Domain"},
                new {Id = 5, DomainId = 3, DocumentName = "Fifth Ad Hoc Document", DocumentDescription = "Description of Fifth Ad Hoc Document, Third Domain"},
                new {Id = 6, DomainId = 4, DocumentName = "Sixth Ad Hoc Document", DocumentDescription = "Description of Sixth Ad Hoc Document, Forth Domain"},
                new {Id = 7, DomainId = 4, DocumentName = "Seventh Ad Hoc Document", DocumentDescription = "Description of Seventh Ad Hoc Document, Forth Domain"},
                new {Id = 8, DomainId = 4, DocumentName = "Eighth Ad Hoc Document", DocumentDescription = "Description of Eighth Ad Hoc Document, Forth Domain"},

            };

        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreApi.Models;

namespace CoreApi.Data
{
    public static class AdHocDocumentModelSeedData
    {
        public static object[] GetData()
        {
            return new object[]
            {
                new AdHocDocumentModel {AdHocDocumentId = 1, DomainId = 1, DocumentName = "First Ad Hoc Document", DocumentDescription = "Description of First Ad Hoc Document, First Domain"},
                new AdHocDocumentModel {AdHocDocumentId = 2, DomainId = 1, DocumentName = "Second Ad Hoc Document", DocumentDescription = "Description of Second Ad Hoc Document, First Domain"},
                new AdHocDocumentModel {AdHocDocumentId = 3, DomainId = 2, DocumentName = "Third Ad Hoc Document", DocumentDescription = "Description of Third Ad Hoc Document, Second Domain"},
                new AdHocDocumentModel {AdHocDocumentId = 4, DomainId = 2, DocumentName = "Forth Ad Hoc Document", DocumentDescription = "Description of Forth Ad Hoc Document, Second Domain"},
                new AdHocDocumentModel {AdHocDocumentId = 5, DomainId = 3, DocumentName = "Fifth Ad Hoc Document", DocumentDescription = "Description of Fifth Ad Hoc Document, Third Domain"},
                new AdHocDocumentModel {AdHocDocumentId = 6, DomainId = 4, DocumentName = "Sixth Ad Hoc Document", DocumentDescription = "Description of Sixth Ad Hoc Document, Forth Domain"},
                new AdHocDocumentModel {AdHocDocumentId = 7, DomainId = 4, DocumentName = "Seventh Ad Hoc Document", DocumentDescription = "Description of Seventh Ad Hoc Document, Forth Domain"},
                new AdHocDocumentModel {AdHocDocumentId = 8, DomainId = 4, DocumentName = "Eighth Ad Hoc Document", DocumentDescription = "Description of Eighth Ad Hoc Document, Forth Domain"},

            };

        }
    }
}

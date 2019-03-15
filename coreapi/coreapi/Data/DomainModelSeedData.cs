using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreApi.Models;
using Microsoft.AspNetCore.Rewrite.Internal.ApacheModRewrite;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CoreApi.Data
{
    public static class DomainModelSeedData
    {
        public static object[] GetData()
        {
            return new object[]
            {
                new DomainModel {DomainId = 1, DomainName = "First Domain", DomainDescription = "This is the domain of the first dynamic document repository"},
                new DomainModel {DomainId = 2, DomainName = "Second Domain", DomainDescription = "This is the domain of the Second dynamic document repository"},
                new DomainModel {DomainId = 3, DomainName = "Third Domain", DomainDescription = "This is the domain of the Third dynamic document repository"},
                new DomainModel {DomainId = 4, DomainName = "Forth Domain", DomainDescription = "This is the domain of the Forth dynamic document repository"},
            };



        }
    }
}

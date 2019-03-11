using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreApi.Data;
using CoreApi.Models;
using Microsoft.EntityFrameworkCore.Extensions.Internal;

namespace coreapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdHocDocumentsController : ControllerBase
    {
        private readonly AppDbContext context;

        public AdHocDocumentsController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/AdHocDocuments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdHocDocumentModel>>> GetAdHocDocuments()
        {
            return await context.AdHocDocuments.ToListAsync();
        }

        // GET: api/AdHocDocuments/domain/5
        [HttpGet("domain/{id}")]
        public async Task<ActionResult<IEnumerable<AdHocDocumentModel>>> GetAdHocDocumentsByDomain(int id)
        {
            var adHocDocumentModel = await context.AdHocDocuments.Where(adHocDocuments => adHocDocuments.DomainId == id).ToListAsync();

            if (adHocDocumentModel == null)
            {
                return NotFound();
            }

            return adHocDocumentModel;
        }

        // GET: api/AdHocDocuments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AdHocDocumentModel>> GetAdHocDocumentModel(int id)
        {
            var adHocDocumentModel = await context.AdHocDocuments.FindAsync(id);

            if (adHocDocumentModel == null)
            {
                return NotFound();
            }

            return adHocDocumentModel;
        }

        // PUT: api/AdHocDocuments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdHocDocumentModel(int id, AdHocDocumentModel adHocDocumentModel)
        {
            if (id != adHocDocumentModel.Id)
            {
                return BadRequest();
            }

            context.Entry(adHocDocumentModel).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdHocDocumentModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AdHocDocuments
        [HttpPost]
        public async Task<ActionResult<AdHocDocumentModel>> PostAdHocDocumentModel(AdHocDocumentModel adHocDocumentModel)
        {
            context.AdHocDocuments.Add(adHocDocumentModel);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetAdHocDocumentModel", new { id = adHocDocumentModel.Id }, adHocDocumentModel);
        }

        // DELETE: api/AdHocDocuments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AdHocDocumentModel>> DeleteAdHocDocumentModel(int id)
        {
            var adHocDocumentModel = await context.AdHocDocuments.FindAsync(id);
            if (adHocDocumentModel == null)
            {
                return NotFound();
            }

            context.AdHocDocuments.Remove(adHocDocumentModel);
            await context.SaveChangesAsync();

            return adHocDocumentModel;
        }

        private bool AdHocDocumentModelExists(int id)
        {
            return context.AdHocDocuments.Any(e => e.Id == id);
        }
    }
}

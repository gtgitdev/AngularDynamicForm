using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreApi.Data;
using CoreApi.Models;

namespace CoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DomainsController : ControllerBase
    {
        private readonly AppDbContext context;

        public DomainsController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/Domain
        [HttpGet]
        public IEnumerable<DomainModel> GetDomains()
        {
            return context.Domains;
        }

        // GET: api/Domain/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDomainModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var domainModel = await context.Domains.FindAsync(id);

            if (domainModel == null)
            {
                return NotFound();
            }

            return Ok(domainModel);
        }

        // PUT: api/Domain/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDomainModel([FromRoute] int id, [FromBody] DomainModel domainModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != domainModel.Id)
            {
                return BadRequest();
            }

            context.Entry(domainModel).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DomainModelExists(id))
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

        // POST: api/Domain
        [HttpPost]
        public async Task<IActionResult> PostDomainModel([FromBody] DomainModel domainModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.Domains.Add(domainModel);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetDomainModel", new { id = domainModel.Id }, domainModel);
        }

        // DELETE: api/Domain/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDomainModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var domainModel = await context.Domains.FindAsync(id);
            if (domainModel == null)
            {
                return NotFound();
            }

            context.Domains.Remove(domainModel);
            await context.SaveChangesAsync();

            return Ok(domainModel);
        }

        private bool DomainModelExists(int id)
        {
            return context.Domains.Any(e => e.Id == id);
        }
    }
}
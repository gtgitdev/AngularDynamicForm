using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreApi.Data;
using CoreApi.Models;

namespace coreapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DynamicFieldsController : ControllerBase
    {
        private readonly AppDbContext context;

        public DynamicFieldsController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/DynamicForm
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DynamicFieldModel>>> GetDynamicFields()
        {
            return await context.DynamicFields.ToListAsync();
        }

        // GET: api/DynamicForm
        [HttpGet("document/{id}")]
        public async Task<ActionResult<IEnumerable<DynamicFieldModel>>> GetDynamicFieldsByDocument(int id)
        {
            var dynamicFieldModel = await context.DynamicFields.Where(dynamicFields => dynamicFields.AdHocDocumentId == id).ToListAsync();

            if (dynamicFieldModel == null)
            {
                return NotFound();
            }

            return dynamicFieldModel;
        }


        // GET: api/DynamicForm/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DynamicFieldModel>> GetDynamicFieldModel(int id)
        {
            var dynamicFieldModel = await context.DynamicFields.FindAsync(id);

            if (dynamicFieldModel == null)
            {
                return NotFound();
            }

            return dynamicFieldModel;
        }

        // PUT: api/DynamicForm/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDynamicFieldModel(int id, DynamicFieldModel dynamicFieldModel)
        {
            if (id != dynamicFieldModel.DynamicFieldId)
            {
                return BadRequest();
            }

            context.Entry(dynamicFieldModel).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DynamicFieldModelExists(id))
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

        // POST: api/DynamicForm
        [HttpPost]
        public async Task<ActionResult<DynamicFieldModel>> PostDynamicFieldModel(DynamicFieldModel dynamicFieldModel)
        {
            context.DynamicFields.Add(dynamicFieldModel);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetDynamicFieldModel", new { id = dynamicFieldModel.DynamicFieldId }, dynamicFieldModel);
        }

        // DELETE: api/DynamicForm/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DynamicFieldModel>> DeleteDynamicFieldModel(int id)
        {
            var dynamicFieldModel = await context.DynamicFields.FindAsync(id);
            if (dynamicFieldModel == null)
            {
                return NotFound();
            }

            context.DynamicFields.Remove(dynamicFieldModel);
            await context.SaveChangesAsync();

            return dynamicFieldModel;
        }

        private bool DynamicFieldModelExists(int id)
        {
            return context.DynamicFields.Any(e => e.DynamicFieldId == id);
        }
    }
}

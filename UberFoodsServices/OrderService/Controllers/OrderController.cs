using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrderService.Data;
using OrderService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase {
        [HttpPost("finishOrder")]
        public IActionResult FinishOrder([FromBody]CompleteOrder order) {
            if (ModelState.IsValid) { 
            }
            try {
                OrderData.InsertOrder(order);
                return Ok();
            } catch (Exception e) {
                return BadRequest(e.Message);
            }
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrderService.Data;
using OrderService.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace UberFoodsAPI.Controllers{
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
        [HttpGet("getOrdersListForAccount")]
        public IActionResult GetOrdersList([FromQuery]int userId, int accountTypeId){
            try {
                DataTable ordersListTable;
                if (accountTypeId == 1) {
                    ordersListTable = OrderData.GetOrdererOrdersList(userId);
                } else { 
                    ordersListTable = OrderData.GetDeliveryOrdersList(userId);
                }
                List<OrderListItem> orderListItems = new List<OrderListItem>(ordersListTable.Rows.Count);
                foreach (DataRow row in ordersListTable.Rows) {
                    OrderListItem orderListItem = new OrderListItem();
                    if (!string.IsNullOrEmpty(row["Id"].ToString())) {
                        orderListItem.Id = Convert.ToInt64(row["Id"].ToString());
                    }
                    if (!string.IsNullOrEmpty(row["DataPorositur"].ToString())) {
                        orderListItem.OrderedDate = Convert.ToDateTime(row["DataPorositur"].ToString());
                    }
                    if (!string.IsNullOrEmpty(row["EmriMbiemriPorositesit"].ToString())) {
                        orderListItem.OrdererName = row["EmriMbiemriPorositesit"].ToString();
                    }
                    if (!string.IsNullOrEmpty(row["DataEPerfundimit"].ToString())) {
                        orderListItem.PreparationDate = Convert.ToDateTime(row["DataEPerfundimit"].ToString());
                    }
                    if (!string.IsNullOrEmpty(row["DataEMarrjesNgaDerguesi"].ToString())) {
                        orderListItem.PickUpDate = Convert.ToDateTime(row["DataEMarrjesNgaDerguesi"].ToString());
                    }
                    if (!string.IsNullOrEmpty(row["DataEPranimit"].ToString())) {
                        orderListItem.AcceptDate = Convert.ToDateTime(row["DataEPranimit"].ToString());
                    }
                    orderListItems.Add(orderListItem);
                }
            return Ok(orderListItems);

            } catch (Exception) {
                return BadRequest("ERROR");
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using OrderService.Data;
using OrderService.Models;

namespace OrderService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        [HttpPost("createOrdererAccount")]
        public void CreateOrdererAccount(Orderer orderer) {
            AccountData.InsertOrderer(orderer);
        }
        [HttpPost("createDeliveryAccount")]
        public void CreateDeliveryAccount(Delivery delivery) {
            AccountData.InsertDelivery(delivery);
        }
        [HttpPost("createCorporateAccount")]
        public void CreateCorporateAccount(Account account, Corporate corporate) {
            AccountData.InsertCorporateAccount(account, corporate);
        }
    }
}
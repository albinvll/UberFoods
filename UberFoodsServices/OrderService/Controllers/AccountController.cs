using Microsoft.AspNetCore.Mvc;
using OrderService.Data;
using OrderService.Models;
using System;
using System.Data;

namespace OrderService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        [HttpPost("createOrdererAccount")]
        public void CreateOrdererAccount(Orderer orderer)
        {
            AccountData.InsertOrderer(orderer);
        }

        [HttpPost("createDeliveryAccount")]
        public void CreateDeliveryAccount(Delivery delivery)
        {
            AccountData.InsertDelivery(delivery);
        }

        [HttpPost("createCorporateAccount")]
        public void CreateCorporateAccount([FromBody] NewManager newManager)
        {
            AccountData.InsertCorporateAccount(newManager.Account, newManager.Corporate);
        }

        [HttpPost("login")]
        public LoginResponse Login([FromBody]LoginRequest loginRequest)
        {
            DataTable table = AccountData.Login(loginRequest.email, loginRequest.password, loginRequest.accountType);
            if (table.Rows.Count <= 0)
            {
                return null;
            }
            LoginResponse loginResponse = new LoginResponse();
            if (loginRequest.accountType == 3)
            {
                loginResponse.Id = Convert.ToInt32(table.Rows[0]["Id"].ToString());
                loginResponse.AccountType = loginRequest.accountType;
                loginResponse.CorporateId = Convert.ToInt64(table.Rows[0]["KorporataId"].ToString());
            }
            else
            {
                loginResponse.Id = Convert.ToInt32(table.Rows[0]["Id"].ToString());
                loginResponse.AccountType = loginRequest.accountType;
            }
            return loginResponse;
        }

        public class LoginRequest
        {
            public string email { get; set; }
            public string password { get; set; }
            public int accountType { get; set; }
        }
    }
}
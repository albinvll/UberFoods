using Microsoft.AspNetCore.Mvc;
using AccountManagement.Data;
using AccountManagement.Models;
using System;
using System.Collections.Generic;
using System.Data;

namespace AccountManagement.Controllers
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
        public IActionResult Login([FromBody]LoginRequest loginRequest)
        {
            DataTable table = AccountData.Login(loginRequest.email, loginRequest.password, loginRequest.accountType);
            if (table.Rows.Count <= 0)
            {
                return NotFound("Perdoruesi nuk u gjet");
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
            return Ok(loginResponse);
        }

        public class LoginRequest
        {
            public string email { get; set; }
            public string password { get; set; }
            public int accountType { get; set; }
        }

        [HttpGet("getUserById")]
        public List<Account> GetUserById([FromQuery] long userId)
        {
            DataTable userTable = AccountData.GetUserById(userId);
            List<Account> userList = new List<Account>(userTable.Rows.Count);

            foreach(DataRow dr in userTable.Rows)
            {
                Account temp = new Account();
                temp.Name = dr["Emri"].ToString();
                temp.Surname = dr["Mbiemri"].ToString();
                temp.Email = dr["Email"].ToString();
                temp.Password = dr["Password"].ToString();
                userList.Add(temp);
            }

            return userList;
        }
    }
}
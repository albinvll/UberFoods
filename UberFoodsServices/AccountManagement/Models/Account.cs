using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountManagement.Models
{
    public class Account
    {
        public Account() { }


        public Account(Account account)
        {
            Id = account.Id;
            Name = account.Name;
            Surname = account.Surname;
            Email = account.Email;
            Address = account.Address;
            Password = account.Password;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
    }
}

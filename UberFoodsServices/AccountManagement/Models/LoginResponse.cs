using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountManagement.Models
{
    public class LoginResponse
    {
            public int Id { get; set; }
            public int AccountType { get; set; }
            public long? CorporateId { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Models
{
    public class LoginResponse
    {
            public int Id { get; set; }
            public int AccountType { get; set; }
            public long? CorporateId { get; set; }
    }
}

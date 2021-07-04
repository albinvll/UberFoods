using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountManagement.Models
{
    public class Orderer : Account
    {
        public int PaymentType { get; set; }
    }
}

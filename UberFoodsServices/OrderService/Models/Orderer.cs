using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Models
{
    public class Orderer : Account
    {
        public int PaymentType { get; set; }
        public Orderer(Account account, int paymentType) : base(account) {
            this.PaymentType = paymentType;
        }
    }
}

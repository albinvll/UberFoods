using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Models
{
    public class Delivery:Account
    {
        public string DeliveryType { get; set; }
        public Delivery(Account account, string deliveryType) : base(account) {
            this.DeliveryType = deliveryType;
        }
    }
}

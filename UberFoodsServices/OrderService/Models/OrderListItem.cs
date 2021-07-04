using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Models {
    public class OrderListItem {
        public long Id { get; set; }
        public string OrdererName { get; set; }
        public DateTime? OrderedDate { get; set; }
        public DateTime? PreparationDate { get; set; }
        public DateTime? PickUpDate { get; set; }
        public DateTime? AcceptDate { get; set; }
    }
}

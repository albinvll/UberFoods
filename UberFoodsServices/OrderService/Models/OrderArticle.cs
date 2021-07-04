using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Models {
    public class OrderArticle {
        public long Id { get; set; }
        public decimal Price { get; set; }
        public decimal Qty { get; set; }
    }
}

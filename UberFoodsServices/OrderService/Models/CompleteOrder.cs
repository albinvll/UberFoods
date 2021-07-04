using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Models {
    public class CompleteOrder {
        public OrderHeader orderHeader { get; set; }
        public List<OrderArticle> orderArticles { get; set; }
    }
}

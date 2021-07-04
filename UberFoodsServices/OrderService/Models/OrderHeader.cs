using System;

namespace OrderService.Models
{
    public class OrderHeader
    {
        public long OrdererId { get; set; }
        public int RestaurantId { get; set; }
        public string Comment { get; set; }
    }
}
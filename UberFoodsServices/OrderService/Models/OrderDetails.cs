namespace OrderService.Models
{
    public class OrderDetails
    {
        public long OrderHeaderId { get; set; }
        public long ArticleId { get; set; }
        public decimal Amount { get; set; }
        public decimal? Rebate { get; set; }
        public decimal? ExtraRebate { get; set; }
        public decimal Price { get; set; }
    }
}
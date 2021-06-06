using System;

namespace UberFoodsAPI.Models
{
    public class OrderHeader
    {
        public long OrdererId { get; set; }
        public DateTime RegistrationDate { get; set; }
        public DateTime OrderEndDate { get; set; }
        public DateTime OrderSentDate { get; set; }
        public DateTime OrderAcceptedDate { get; set; }
        public string Comment { get; set; }
        public long? SecondaryAddress { get; set; }
        public bool Anulled { get; set; } = false;
        public long SenderId { get; set; }
        public int RestaurantId { get; set; }
    }
}
namespace RestaurantManagement.Models
{
    public class Restaurant
    {
        public int Id
        {
            get; set;
        }

        public long CorporateId
        {
            get; set;
        }

        public string Description
        {
            get; set;
        }

        public long AddressId
        {
            get; set;
        }

        public string TelephoneNr
        {
            get; set;
        }

        public int MenuId
        {
            get; set;
        }
    }
}
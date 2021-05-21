using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UberFoodsAPI.Models
{
    public class Restaurant
    {
        public int Id {
            get; set;           
        }
        public long CorporateId {
            get; set;
        }
        public string DescriptionId {
            get; set;
        } 
        public long AddressId
        {
            get; set;
        }
        public string TelephoneNr {
            get; set;
        }
        public int MenuId
        {
            get; set; 
        }
    }
}

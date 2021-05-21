using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UberFoodsAPI.Controllers

    [ApiController]
    [Route("[controller]")]
{
    public class RestaurantController : ControllerBase
    {
    [HttpGet("getRestaurant")]

    public List<Restaurant> GetRestauran([FromQuery] int PikaId){
        DataTable restaurantsTable = RestaurantsData.GetRestaurantsPikaId(PikaId);
        List<Restaurants> restaurantsList = new List<Restaurants>(restaurantsTable.Rows.Count);
        foreach (DataRow dr in Table.Rows)
        {
            Restaurant temp = new Restaurant();
            temp.Id = Convert.ToInt64(dr["Id"].ToString());
            temp.CorporateId = dr["Korporata"].ToString();
            temp.DescriptionId = Convert.ToInt64(dr["Pershkrimi"].ToString());
            temp.AddressId = dr["Adresa"].ToString();
            temp.TelephoneNr = Convert.ToInt64(dr["NrTelefonit"].ToString());
            temp.MenuId = Convert.ToInt64(dr["MenuId"].ToString());
            restaurantsList.Add(temp);
        }
        return restaurantsList;
    }
}

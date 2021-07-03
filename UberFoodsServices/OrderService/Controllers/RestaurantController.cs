using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using UberFoodsAPI.Data;
using UberFoodsAPI.Models;

namespace UberFoodsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RestaurantController : ControllerBase
    {
        [HttpGet("getRestaurant")]
        public List<Restaurant> GetRestaurant()
        {
            DataTable restaurantsTable = RestaurantData.GetRestaurants();
            List<Restaurant> restaurantsList = new List<Restaurant>(restaurantsTable.Rows.Count);
            foreach (DataRow dr in restaurantsTable.Rows)
            {
                Restaurant temp = new Restaurant();
                temp.Id = Convert.ToInt32(dr["Id"].ToString());
                temp.CorporateId = Convert.ToInt64(dr["KorporataId"].ToString());
                temp.Description = dr["Pershkrimi"].ToString();
                temp.AddressId = Convert.ToInt64(dr["AdresaId"].ToString());
                temp.TelephoneNr = dr["NrTelefonit"].ToString();
                temp.MenuId = Convert.ToInt32(dr["MenuId"].ToString());
                restaurantsList.Add(temp);
            }
            return restaurantsList;
        }

        [HttpGet("getRestaurantFromCorpId")]
        public List<Restaurant> GetRestaurantFromCorpId(int CorpId)
        {
            DataTable restaurantsTable = RestaurantData.GetRestaurantsFromCorpId(CorpId);
            List<Restaurant> restaurantsList = new List<Restaurant>(restaurantsTable.Rows.Count);
            foreach (DataRow dr in restaurantsTable.Rows)
            {
                Restaurant temp = new Restaurant();
                temp.Id = Convert.ToInt32(dr["Id"].ToString());
                temp.CorporateId = Convert.ToInt64(dr["KorporataId"].ToString());
                temp.Description = dr["Pershkrimi"].ToString();
                temp.AddressId = Convert.ToInt64(dr["AdresaId"].ToString());
                temp.TelephoneNr = dr["NrTelefonit"].ToString();
                temp.MenuId = Convert.ToInt32(dr["MenuId"].ToString());
                restaurantsList.Add(temp);
            }
            return restaurantsList;
        }

        [HttpPost("createRestaurant")]
        public void CreateRestaurant([FromBody]newRestaurant restaurant)
        {
            RestaurantData.InsertRestaurant(restaurant.Restaurant, restaurant.Adresa);
        }
    }
}
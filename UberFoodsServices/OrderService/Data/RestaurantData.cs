using OrderService;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UberFoodsAPI.Models;

namespace UberFoodsAPI.Data
{
    public class RestaurantData
    {
        public static DataTable GetRestaurants()
        {
            DataTable table = new DataTable();
           SqlDataAdapter da = new SqlDataAdapter("PikaSelect_sp", PublicClass.ConnectionString);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@PikaId", null);
            da.Fill(table);
            return table;
        }

        public static void InsertRestaurantCommand(Restaurant restaurant, Menu menu,int korportataId, SqlConnection cnn, SqlTransaction tran)
        {
            SqlCommand insert = new SqlCommand("PikaInsert_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };

            insert.Parameters.AddWithValue("@KorporataId", korportataId);
            insert.Parameters.AddWithValue("@PikaPershkrimi",restaurant.Description);
            
        }
    }
}

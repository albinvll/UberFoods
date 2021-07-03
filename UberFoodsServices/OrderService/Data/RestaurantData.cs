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

        public static void InsertRestaurant(Restaurant restaurant, Adresa adresa)
        {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;

            try
            {
                cnn.Open();
                tran = cnn.BeginTransaction();
                InsertRestaurantCommand(restaurant, adresa,cnn,tran);
                tran.Commit();
            }catch(Exception e)
            {
                Console.Error.WriteLine(e.StackTrace);
                tran.Rollback();
                throw;
            }
            finally
            {
                cnn.Close();
            }
        }

        public static void InsertRestaurantCommand(Restaurant restaurant,Adresa adresa, SqlConnection cnn, SqlTransaction tran)
        {
            SqlCommand insert = new SqlCommand("PikaInsert_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };

            insert.Parameters.AddWithValue("@KorporataId", restaurant.CorporateId);
            insert.Parameters.AddWithValue("@PikaPershkrimi",restaurant.Description);
            insert.Parameters.AddWithValue("@AdresaPershkrimi", adresa.Description);
            insert.Parameters.AddWithValue("@AdresaX", 1.1);
            insert.Parameters.AddWithValue("@AdresaY", 1.1);
            insert.Parameters.AddWithValue("@AdresaZ", 1.1);
            insert.Parameters.AddWithValue("@NrTelefonit", restaurant.TelephoneNr);
            insert.ExecuteNonQuery();
        }
    }
}

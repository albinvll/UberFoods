using OrderService.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OrderService.Data {
    public static class OrderData {
        public static DataTable GetOrdererOrdersList(int userId) {
            string storedProcedure = "PorositesiOrderListSelect_sp";
            DataTable table = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(storedProcedure, PublicClass.ConnectionString);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@PorositesiId", userId);
            da.Fill(table);
            return table;
        }

        public static DataTable GetDeliveryOrdersList(int userId) {
            string storedProcedure = "DerguesiOrderListSelect_sp";
            DataTable table = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(storedProcedure, PublicClass.ConnectionString);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@DerguesiId", userId);
            da.Fill(table);
            return table;
        }


        public static void InsertOrder(CompleteOrder completeOrder) {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;

            try {
                cnn.Open();
                tran = cnn.BeginTransaction();
                long headerId = InsertOrderHeaderCommand(completeOrder.orderHeader,cnn,tran);
                foreach (OrderArticle a in completeOrder.orderArticles) { 
                    InsertOrderDetailsCommand(a,headerId,cnn,tran);
                }
                tran.Commit();
            } catch (Exception e) {
                Console.Error.WriteLine(e.StackTrace);
                tran.Rollback();
                throw;
            } finally {
                cnn.Close();
            }

        }

        private static void InsertOrderDetailsCommand(OrderArticle article, long headerId,SqlConnection cnn, SqlTransaction tran) {
            SqlCommand insert = new SqlCommand("PorosiaNgaPorositesiDetaleInsert_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };

            insert.Parameters.AddWithValue("@PorosiaId",headerId);
            insert.Parameters.AddWithValue("@ArtikulliId", article.Id);
            insert.Parameters.AddWithValue("@Sasia", article.Qty);
            insert.Parameters.AddWithValue("@Rabati",null);
            insert.Parameters.AddWithValue("@EkstraRabati",null);
            insert.Parameters.AddWithValue("@Cmimi", article.Price);
            insert.ExecuteNonQuery();
        }

        private static long InsertOrderHeaderCommand(OrderHeader orderHeader, SqlConnection cnn, SqlTransaction tran) {
            SqlCommand insert = new SqlCommand("PorosiaNgaPorositesiHeaderInsert_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };

            insert.Parameters.AddWithValue("@PorositesiId", orderHeader.OrdererId);
            insert.Parameters.AddWithValue("@PikaID", orderHeader.RestaurantId);
            insert.Parameters.AddWithValue("@Komenti", orderHeader.Comment);
            long id = Convert.ToInt64(insert.ExecuteScalar());
            return id;
        }

        public static void OrdererAccept(long orderId) {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;
            try {
                cnn.Open();
                tran = cnn.BeginTransaction();
                OrdererAcceptCommand(orderId, cnn, tran);
                tran.Commit();
            } catch (Exception e) {
                Console.Error.WriteLine(e.StackTrace);
                tran.Rollback();
                throw;
            } finally {
                cnn.Close();
            }
        }

        private static void OrdererAcceptCommand(long orderId, SqlConnection cnn, SqlTransaction tran) {
            SqlCommand update = new SqlCommand("PorositesiPrano_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };

            update.Parameters.AddWithValue("@PorosiaId", orderId);
            update.ExecuteNonQuery();
        }
        public static void DeliveryAccept(long orderId,long userId) {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;
            try {
                cnn.Open();
                tran = cnn.BeginTransaction();
                DeliveryAcceptCommand(orderId,userId, cnn, tran);
                tran.Commit();
            } catch (Exception e) {
                Console.Error.WriteLine(e.StackTrace);
                tran.Rollback();
                throw;
            } finally {
                cnn.Close();
            }
        }

        private static void DeliveryAcceptCommand(long orderId,long userId, SqlConnection cnn, SqlTransaction tran) {
            SqlCommand update = new SqlCommand("DerguesiPrano_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };
            update.Parameters.AddWithValue("@PorosiaId", orderId);
            update.Parameters.AddWithValue("@DerguesiId", userId);
            update.ExecuteNonQuery();
        }
    }
}

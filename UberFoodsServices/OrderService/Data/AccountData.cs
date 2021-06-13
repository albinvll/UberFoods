using OrderService.Models;
using System;
using System.Data;
using System.Data.SqlClient;

namespace OrderService.Data
{
    public class AccountData
    {
        public static void InsertOrderer(Orderer orderer)
        {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;
            try
            {
                cnn.Open();
                tran = cnn.BeginTransaction();
                InsertOrdererCommand(orderer, cnn, tran);
                tran.Commit();
            }
            catch (Exception e)
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

        private static void InsertOrdererCommand(Orderer orderer, SqlConnection cnn, SqlTransaction tran)
        {
            SqlCommand insert = new SqlCommand("PorositesiInsert_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };
            insert.Parameters.AddWithValue("@Emri", orderer.Name);
            insert.Parameters.AddWithValue("@Mbiemri", orderer.Surname);
            insert.Parameters.AddWithValue("@Email", orderer.Email);
            insert.Parameters.AddWithValue("@Password", orderer.Password);
            insert.Parameters.AddWithValue("@AdresaPershkrimi", orderer.Address);

            insert.Parameters.AddWithValue("@MenyraPagesesId", orderer.PaymentType);
            insert.Parameters.AddWithValue("@AdresaX", 1.1);
            insert.Parameters.AddWithValue("@AdresaY", 1.1);
            insert.Parameters.AddWithValue("@AdresaZ", 11.1);
            insert.ExecuteNonQuery();
        }

        public static DataTable Login(string email, string password, int accountType)
        {
            string strProcedure;
            if (accountType == 1)
            {
                strProcedure = "PerdoruesiPorositesLogin_sp";
            }
            else if (accountType == 2) {
                strProcedure = "PerdoruesiDerguesLogin_sp";
            }
            else {
                strProcedure = "PerdoruesiMenaxhuesLogin_sp";
            }
            DataTable table = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(strProcedure, PublicClass.ConnectionString);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@Email", email);
            da.SelectCommand.Parameters.AddWithValue("@Password", password);
            da.Fill(table);
            return table;
        }

        public static void InsertDelivery(Delivery delivery)
        {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;
            try
            {
                cnn.Open();
                tran = cnn.BeginTransaction();
                InsertDeliveryCommand(delivery, cnn, tran);
                tran.Commit();
            }
            catch (Exception e)
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

        private static void InsertDeliveryCommand(Delivery delivery, SqlConnection cnn, SqlTransaction tran)
        {
            SqlCommand insert = new SqlCommand("DerguesiInsert_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };
            insert.Parameters.AddWithValue("@Emri", delivery.Name);
            insert.Parameters.AddWithValue("@Mbiemri", delivery.Surname);
            insert.Parameters.AddWithValue("@Email", delivery.Email);
            insert.Parameters.AddWithValue("@Password", delivery.Password);
            insert.Parameters.AddWithValue("@AdresaPershkrimi", delivery.Address);
            insert.Parameters.AddWithValue("@MenyraDergesesPershkrimi", delivery.DeliveryType);
            insert.Parameters.AddWithValue("@AdresaX", 1.1);
            insert.Parameters.AddWithValue("@AdresaY", 1.1);
            insert.Parameters.AddWithValue("@AdresaZ", 11.1);
            insert.ExecuteNonQuery();
        }

        public static void InsertCorporateAccount(Account account, Corporate corporate)
        {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;
            try
            {
                cnn.Open();
                tran = cnn.BeginTransaction();
                InsertCorporateAccountCommand(account, corporate, cnn, tran);
                tran.Commit();
            }
            catch (Exception e)
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

        private static void InsertCorporateAccountCommand(Account account, Corporate corporate, SqlConnection cnn, SqlTransaction tran)
        {
            SqlCommand insert = new SqlCommand("MenaxhuesiInsert_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };
            insert.Parameters.AddWithValue("@Emri", account.Name);
            insert.Parameters.AddWithValue("@Mbiemri", account.Surname);
            insert.Parameters.AddWithValue("@Email", account.Email);
            insert.Parameters.AddWithValue("@Password", account.Password);
            insert.Parameters.AddWithValue("@AdresaPershkrimi", account.Address);
            insert.Parameters.AddWithValue("@AdresaX", 1.1);
            insert.Parameters.AddWithValue("@AdresaY", 1.1);
            insert.Parameters.AddWithValue("@AdresaZ", 11.1);
            insert.Parameters.AddWithValue("@KorporataPershkrimi", account.Address);
            insert.Parameters.AddWithValue("@KorporataEmail", corporate.Email);
            insert.Parameters.AddWithValue("@Komuna", corporate.City);
            insert.ExecuteNonQuery();
        }
    }
}
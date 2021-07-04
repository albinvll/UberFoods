using OrderService;
using System;
using System.Data;
using System.Data.SqlClient;
using UberFoodsAPI.Models;

namespace UberFoodsAPI.Data
{
    public class ArticlesData
    {
        public static DataTable GetArticlesWithMenuId(int menuId)
        {
            DataTable table = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter("ArtikujtFromMenuIdSelect_sp", PublicClass.ConnectionString);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@MenuId", menuId);
            da.Fill(table);
            return table;
        }

        public static DataTable GetAllArticles()
        {
            DataTable table = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter("AllArticles_sp", PublicClass.ConnectionString);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.Fill(table);
            return table;

        }

        public static DataTable FrontPageArticles()
        {
            DataTable table = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter("Top3Articles_sp", PublicClass.ConnectionString);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.Fill(table);
            return table;
        }

        public static void InsertArtikulliMenus(Article article, int MenuId)
        {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;

            try
            {
                cnn.Open();
                tran = cnn.BeginTransaction();
                InsertArtikulliMenusCommand(article, MenuId, cnn, tran);
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

        public static void InsertArtikulliMenusCommand(Article article, int MenuId, SqlConnection cnn, SqlTransaction tran)
        {
            SqlCommand insert = new SqlCommand("InsertArtikulliMenus_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };

            insert.Parameters.AddWithValue("@Pershkrimi", article.Description);
            insert.Parameters.AddWithValue("@Cmimi", article.Price);
            insert.Parameters.AddWithValue("@MenuId", MenuId);
            insert.ExecuteNonQuery();
        }


        public static void DeleteArticleById(int articleId)
        {
            SqlConnection cnn = new SqlConnection(PublicClass.ConnectionString);
            SqlTransaction tran = default;

            try
            {
                cnn.Open();
                tran = cnn.BeginTransaction();
                DeleteArticleByIdCommand(articleId, cnn, tran);
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


        public static void DeleteArticleByIdCommand(int articleId, SqlConnection cnn, SqlTransaction tran)
        {
            SqlCommand delete = new SqlCommand("DeleteArtikulliById_sp", cnn, tran)
            {
                CommandType = CommandType.StoredProcedure
            };

            delete.Parameters.AddWithValue("@ArtikulliId", articleId);
            delete.ExecuteNonQuery();
        }
    }
}
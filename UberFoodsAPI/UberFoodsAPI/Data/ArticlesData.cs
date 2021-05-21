using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

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
    }
}

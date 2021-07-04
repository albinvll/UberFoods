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
    public class ArticlesController : ControllerBase
    {
        [HttpGet("getArticlesFromRestaurantId")]
        public List<Article> GetArticlesFromMenuId([FromQuery] int menuId)
        {
            DataTable articlesTable = ArticlesData.GetArticlesWithMenuId(menuId);
            List<Article> articlesList = new List<Article>(articlesTable.Rows.Count);
            foreach (DataRow dr in articlesTable.Rows)
            {
                Article temp = new Article();
                temp.Id = Convert.ToInt64(dr["Id"].ToString());
                temp.Description = dr["Pershkrimi"].ToString();
                temp.Price = Convert.ToDecimal(dr["Cmimi"].ToString());
                articlesList.Add(temp);
            }
            return articlesList;
        }

        [HttpGet("getAllArticles")]
        public List<Article> GettAllArticles()
        {
            DataTable articlesTable = ArticlesData.GetAllArticles();
            List<Article> articleList = new List<Article>(articlesTable.Rows.Count);

            foreach(DataRow dr in articlesTable.Rows)
            {
                Article temp = new Article();
                temp.Id = Convert.ToInt64(dr["Id"].ToString());
                temp.Description = dr["Pershkrimi"].ToString();
                temp.Price = Convert.ToDecimal(dr["Cmimi"].ToString());
                articleList.Add(temp);
            }

            return articleList;
        }

        [HttpGet("getTop3Articles")]
        public List<Article> GetTop3Articles()
        {
            DataTable articlesTable = ArticlesData.FrontPageArticles();
            List<Article> articleList = new List<Article>(articlesTable.Rows.Count);

            foreach(DataRow dr in articlesTable.Rows)
            {
                Article temp = new Article();
                temp.Id = Convert.ToInt64(dr["Id"].ToString());
                temp.Description = dr["Pershkrimi"].ToString();
                temp.Price = Convert.ToDecimal(dr["Cmimi"].ToString());
                articleList.Add(temp);
            }

            return articleList;
        }

        [HttpPost("insertArtikulli")]
        public void InsertArtkulli(Article article, int MenuId)
        {
            ArticlesData.InsertArtikulliMenus(article, MenuId);
        }
    }
}
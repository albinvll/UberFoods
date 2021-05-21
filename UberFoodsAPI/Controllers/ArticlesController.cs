using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UberFoodsAPI.Models;

namespace UberFoodsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticlesController : ControllerBase
    {
        [HttpGet("getArticlesFromRestaurantId")]
        public List<Article> GetArticlesFromRestaurantId([FromQuery] int restaurantId) {
            return null;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UberFoodsAPI.Models
{
    public class Adresa
    {
        public long Id { get; set; }

        public string Description { get; set; }
        public double AdresaX { get; set; }

        public double AdresaY { get; set; }

        public double AdresaZ { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ben_pister.WebUI.Models
{
    public class MathGameViewModel
    {
        public int Time { get; set; }
        public int Score { get; set; }
        public int Level { get; set; }

        public int LevelTwoMultiple { get; } = 10;

        public int LevelThreeMultiple { get; } = 15;

        public MathGameViewModel() { }
    }
}
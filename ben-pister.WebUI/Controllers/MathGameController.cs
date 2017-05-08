using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ben_pister.WebUI.Controllers
{
    public class MathGameController : Controller
    {
        // GET: MathGame
        public ActionResult Balloons()
        {
            return View();
        }

        public ActionResult Fish()
        {
            return View();
        }
    }
}
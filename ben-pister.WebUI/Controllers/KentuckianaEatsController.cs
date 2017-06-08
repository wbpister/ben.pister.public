using System.Collections.Generic;
using System.Web.Mvc;
using ben_pister.WebUI.Models;
using ben_pister.Domain.Entities;

namespace ben_pister.WebUI.Controllers
{
    public class KentuckianaEatsController : Controller
    {
        List<KentuckianaEats> ke = new List<KentuckianaEats>();
        // GET: KentuckianaEats
        public ActionResult KIEats()
        {
            Eatery_Repository er = new Eatery_Repository();

            //ViewBag.KEList = er.populateEats();

            return View(er.populateEats());
        }
    }
}
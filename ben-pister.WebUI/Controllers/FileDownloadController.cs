using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace ben_pister.WebUI.Controllers
{
    public class FileDownloadController : Controller
    {
        // GET: FileDownload
        public ActionResult PdfDownload()
        {
            
            return File("~/Doc_Resources/Ben Pister's Resume.pdf", "application/pdf", "Ben Pisters Resume.pdf");
        }
    }
}
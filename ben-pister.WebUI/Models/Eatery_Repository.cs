using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.HtmlControls;
using ben_pister.Domain.Entities;
using System.IO;
using System.Web.Mvc;

namespace ben_pister.WebUI.Models
{
    public class Eatery_Repository
    {
        public string cheddarsMenu;

        private List<KentuckianaEats> Restaurants = new List<KentuckianaEats>();

        public Eatery_Repository()
        {
            
        }

        public List<KentuckianaEats> populateEats()
        {
            string line = "";
            string[] array = new string[4];
            char[] splitter = { '|' };
            KentuckianaEats ke;

            var root = AppDomain.CurrentDomain.BaseDirectory;

            StreamReader file = new StreamReader(root + @"/Doc_Resources/KentuckianaEats.txt");

            while ((line = file.ReadLine()) != null)
            {
                array = line.Split(splitter);

                ke = new KentuckianaEats();

                if (array.Length == 5)
                {
                    ke.Name = array[0];
                    ke.Location = array[1];
                    ke.Phone = array[2];
                    ke.ExpenseLevel = array[3];

                    TagBuilder tag = new TagBuilder("a");
                    tag.MergeAttribute("href", array[4].Trim());
                    tag.MergeAttribute("target", "blank");
                    tag.InnerHtml = "Menu";                    
                    ke.MenuWebSite = MvcHtmlString.Create(tag.ToString());

                    Restaurants.Add(ke);
                }
            }

            List<KentuckianaEats> sortedRest = Restaurants.OrderBy(o => o.Name).ToList<KentuckianaEats>();

            return sortedRest;
        }
    }
}
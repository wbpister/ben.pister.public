﻿using System.Web;
using System.Web.Optimization;

namespace ben_pister.WebUI.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/modernizr-2.6.2.js",
                "~/Scripts/jquery-1.10.2.min.js",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/Doc_View.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/Site.css",
                "~/Content/bootstrap.min.css",
                "~/Content/bootstrap.css",
                "~/Content/bootstrap-theme.css",
                "~/Content/HomeLayout.css"));
        }
    }
}
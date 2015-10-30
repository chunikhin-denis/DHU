﻿using System.Web;
using System.Web.Optimization;

namespace DHU.WebUI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region jQuery

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-migrate-1.2.1.min.js",
                        "~/Scripts/Plugins/jquery-ui/ui/minified/jquery-ui.min.js",
                        "~/Scripts/Plugins/jquery-cookie/jquery.cookie.js",
                        "~/Scripts/Plugins/jStorage/jstorage.min.js",
                        "~/Scripts/jquery.dataTables.min.js",
                        "~/Scripts/Plugins/jquery.inputmask/jquery.inputmask.js",
                        "~/Scripts/jquery.datetimepicker.js",
                        "~/Scripts/Plugins/jformstyler/jquery.formstyler.min.js"));

            bundles.Add(new StyleBundle("~/Content/jquery").Include(
                        "~/Scripts/Plugins/jquery-ui/themes/base/minified/jquery-ui.min.css",
                        "~/Scripts/Plugins/jquery-ui/themes/base/jquery.dataTables.css",
                        "~/Content/jquery.datetimepicker.css",
                        "~/Scripts/Plugins/jformstyler/jquery.formstyler.css"));

            #endregion

            #region Modernizr

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            #endregion

            #region Bootstrap

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Scripts/bootstrap.min.js",
                        "~/Scripts/respond.min.js"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                        "~/Content/bootstrap.min.css"));

            #endregion

            #region AngularJs

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                        "~/Scripts/AngularJs/angular.min.js",
                        "~/Scripts/AngularJs/Modules/angular-ui-router.min.js",
                        "~/Scripts/AngularJs/angular-file-upload.min.js",
                        "~/Scripts/AngularJs/angular-loader.min.js",
                        "~/Scripts/AngularJs/angular-route.min.js",
                        "~/Scripts/AngularJs/angular-cookies.min.js",
                        "~/Scripts/AngularJs/angular-animate.min.js",
                        "~/Scripts/AngularJs/paginate-anything-tpls.min.js",
                        "~/Scripts/AngularJs/angular-sanitize.min.js",
                        "~/Scripts/AngularJs/Modules/angular-local-storage.min.js"));

            #endregion

            #region Angular App

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/App/Services/Services.js",
                        "~/Scripts/App/controllers.js",
                        "~/Scripts/App/app.js"
                        ));

            #endregion

            #region Angular Account App

            bundles.Add(new ScriptBundle("~/bundles/accountapp").Include(
                        "~/Scripts/AccountApp/services.js",
                        "~/Scripts/AccountApp/controllers.js",
                        "~/Scripts/AccountApp/app.js"));

            #endregion

            #region Angular Admin App

            bundles.Add(new ScriptBundle("~/bundles/adminapp").Include(
                        "~/Scripts/AdminApp/Services/Services.js",
                        "~/Scripts/AdminApp/controllers.js",
                        "~/Scripts/AdminApp/app.js"
                        ));

            #endregion

            #region Angular Google maps

            bundles.Add(new ScriptBundle("~/bundles/angular-google-maps").Include(
                        "~/Scripts/Plugins/lodash.min.js",
                        "~/Scripts/AngularJs/Modules/angular-google-maps.min.js"));

            #endregion

            #region Front-end template

            bundles.Add(new StyleBundle("~/Content/frontend").Include(
                        "~/Content/Frontend/style.min.css",
                        "~/Content/Frontend/style-responsive.min.css",
                        "~/Content/toastr.min.css",
                        "~/Content/Frontend/animate.min.css"));

            bundles.Add(new ScriptBundle("~/bundles/frontend").Include(
                // Uncomment to enable pace loader
                //"~/Scripts/Plugins/pace/pace.min.js",
                        "~/Scripts/Plugins/slimscroll/jquery.slimscroll.min.js",
                        "~/Scripts/Frontend/apps.min.js",
                        "~/Scripts/toastr.min.js"));

            #endregion

            // Set EnableOptimizations to false for debugging.
            // Set EnableOptimizations to true for production.
            // For more information, visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
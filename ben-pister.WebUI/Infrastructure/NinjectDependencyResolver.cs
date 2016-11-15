using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Ninject;

namespace ben_pister.WebUI.Infrastructure
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;

        public NinjectDependencyResolver(IKernel localKernel)
        {
            kernel = localKernel;
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return kernel.GetService(serviceType);
        }

        public IEnumerable<Object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }

        public void AddBindings()
        {

        }

    }
}
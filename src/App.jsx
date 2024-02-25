import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import { AboutUs, ContactUs, Landing, Menu, Plans } from "./pages";

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <HomeLayout/>,
      children: [
        {
          index:true,
          element: <Landing/>
        },
        {
          path: 'about-us',
          element: <AboutUs/>
        },
        {
          path: 'contact-us',
          element: <ContactUs/>
        },
        {
          path: 'menu',
          element: <Menu/>
        },
        {
          path: 'plans',
          element: <Plans/>
        }
      ]
    },

  ])




  return <div>
    <RouterProvider router={router}/>
  </div>;
};

export default App;

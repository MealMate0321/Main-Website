import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import { AboutUs, ContactUs, Landing, Menu, Plans } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomeLayout />}
        >
          <Route index element={<Landing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="menu" element={<Menu />} />
          <Route path="plans" element={<Plans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

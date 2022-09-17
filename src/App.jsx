import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="Trainers" element={<Trainers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

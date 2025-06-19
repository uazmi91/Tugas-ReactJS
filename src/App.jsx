import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import Home from "./Pages/home";
import Books from "./Pages/books";
import Team from "./Pages/team";
import Contact from "./Pages/contact";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Optional: 404 route */}
          <Route path="*" element={<h1 className="text-center mt-5">404 - Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

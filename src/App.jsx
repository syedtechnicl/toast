import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;

git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/syedtechnicl/toast.git
git push -u origin main
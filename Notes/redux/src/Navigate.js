import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import About from './about';
import Users from './users';
import Contact from './contact';
import Home from './home';
function Navigator1() {
  return (
<Router>
  <div>
   <nav  style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <Link to="/">Home</Link>
     <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
   </nav>
   <Routes>
   <Route path="/" element={<Home section="home" />} />
   <Route path="/users" element={<Users section="users" />} />
   <Route path="/about" element={<About section="about" />} />
   <Route path="/contact" element={<Contact section="contact" />} />
   
   
   
   </Routes>
  </div>
</Router>
   
  );
}

export default Navigator1; 
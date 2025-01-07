import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import About from './components/About';
import Login from './Login';
import DevelopmentPage from './components/categories/Development';
import Services from "./components/categories/Services";
import Hiring from './components/categories/Hiring';
import Admincontent from './components/categories/Admincontent';
import Pagesetting from './admin_panel component/Pagesetting';
import ContactUs from './components/ContactUs';
import Categories1 from './components/categories/Categories1';
import Category2 from './components/categories/subcategories/Category2';
import Page1 from './pages/Page1';
import Listemployee from './pages/Listemployee';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navbar is included so it appears on all routes */}
        <Navbar />

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/development" element={<DevelopmentPage/>}/>
            <Route path="/service" element={<Services/>}/>
            <Route path ="/hiring" element={<Hiring/>}/>
            <Route path="/adminsection" element={<Admincontent/>}/>
            <Route path="/pagesetting" element={<Pagesetting/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/category1" element={<Categories1/>}/>
            <Route path="/subcategory2" element={<Category2/>}/>
            <Route path="/page1" element={<Page1/>}/>
            <Route path="/listemployee" element={<Listemployee/>}/>

          </Routes>
        </div>

        {/* Footer is included so it appears on all routes */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

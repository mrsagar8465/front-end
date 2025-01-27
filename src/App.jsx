import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './components/Home';
import About from './components/About';
import Login from './Login';
import ContactUs from './components/ContactUs';
import OverviewPage from  './components/OverviewPage';
import AdminProduct from './components/AdminProduct';
import Setting from './components/AdminSett';
import Analytics from './components/AdminAnalytics';
import AdminPage from './components/AdminPage';
import AdminCategory from './components/AdminCategory';
import SubCategory from './components/SubCategory';
import ChildCategory from './components/ChildCategory';





function App() {
  return (

    <BrowserRouter>
      <div className="app-container">
        {/* Navbar is included so it appears on all routes */}
        <div className='fixed insert-0 z-0'>
          <div className='absolute inser-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
          <div className='absoluteinset-0 backdrop-blur-sm' />
        </div>


        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
           
            <Route path="/admin/" element={<OverviewPage />} />
            <Route path="/admin/product" element={<AdminProduct />} />
            <Route path="/admin/setting" element={<Setting />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/page" element={<AdminPage />} />
            <Route path="/admin/category" element={<AdminCategory/>}/>
            <Route path="/admin/subcategory" element={<SubCategory/>}/>
            <Route path="/admin/child-category" element={<ChildCategory/>}/>
            
 
          </Routes>
        </div>

        {/* Footer is included so it appears on all routes */}


      </div>
    </BrowserRouter>
  );
}

export default App;

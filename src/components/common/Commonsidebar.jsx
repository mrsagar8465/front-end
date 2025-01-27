import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, Settings, ShoppingBag, TrendingUp, Users, Menu, ChevronDown, ChevronUp, MenuIcon } from 'lucide-react'; // Importing the arrow icons
import { Link } from 'react-router-dom';


const SIDEBAR_ITEMS = [
  { name: 'Admin', icon: BarChart2, color: '#6366f1', href: '/admin/' },
  { name: 'product', icon: Users, color: '#Ec4899', href: '/admin/product' },
  { name: 'Menu', icon: MenuIcon, color: '#10B981', href: '#', hasDropdown: true },
  { name: 'page', icon: TrendingUp, color: '#3B82F6', href: '/admin/page' },
  { name: 'analytics', icon: TrendingUp, color: '#3B82F6', href: '/admin/analytics' },
  { name: 'setting', icon: Settings, color: '#6EE7B7', href: '/admin/setting' },
];

const Commonsidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control dropdown visibility

  return (
    <div className="h-screen flex flex-col">
      {/* Sidebar */}
      <div className="flex flex-1">
        <motion.div
          className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
            isSidebarOpen ? 'w-30' : 'w-20'
          }`}
          animate={{ width: isSidebarOpen ? 170 : 80 }}
        >
          <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-1 flex flex-col border-r border-gray-700">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-full hover:bg-gray-600 transition-colors max-w-fit"
            >
              <Menu size={24} />
            </motion.button>
            <nav className="mt-8 flex-grow">
              {SIDEBAR_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link to={item.href}>
                    <motion.div
                      className="flex items-center p-2 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2"
                      onClick={() => item.hasDropdown && setIsMenuOpen(!isMenuOpen)} // Toggle dropdown for 'Menu' item
                    >
                      <item.icon size={20} style={{ color: item.color, minWidth: '20px' }} />
                      <AnimatePresence>
                        {isSidebarOpen && (
                          <motion.span
                            className="ml-4 whitespace-nowrap"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {/* Add expand/collapse icon here */}
                      {item.hasDropdown && (
                        <div className="ml-auto">
                          {isMenuOpen ? (
                            <ChevronUp size={18} className="text-white" />
                          ) : (
                            <ChevronDown size={18} className="text-white" />
                          )}
                        </div>
                      )}
                    </motion.div>
                  </Link>
                  {/* Dropdown for 'Menu' item */}
                  {item.hasDropdown && isMenuOpen && isSidebarOpen && (
                    <motion.div
                      className="ml-8 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link to="/admin/category">
                        <motion.div className="text-white p-2 rounded-lg hover:bg-gray-600">Category</motion.div>
                      </Link>
                      <Link to="/admin/subcategory">
                        <motion.div className="text-white p-2 rounded-lg hover:bg-gray-600">Subcategory</motion.div>
                      </Link>
                      <Link to="/admin/child-category">
                        <motion.div className="text-white p-2 rounded-lg hover:bg-gray-600">Child Category</motion.div>
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </motion.div>
  {/* Main Content Area */}
  {/* Main Content Area */}

        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default Commonsidebar;

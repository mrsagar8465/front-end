import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, DollarSign, Settings, ShoppingBag, TrendingUp, Users, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './common/Header';


const SIDEBAR_ITEMS = [
  { name: 'overview', icon: BarChart2, color: '#6366f1', href: '/admin/overview' },
  { name: 'product', icon: Users, color: '#Ec4899', href: '/product' },
  { name: 'category', icon: DollarSign, color: '#10B981', href: '/sales' },
  { name: 'order', icon: ShoppingBag, color: '#F59E0B', href: '/orders' },
  { name: 'analytics', icon: TrendingUp, color: '#3B82F6', href: '/analytics' },
  { name: 'setting', icon: Settings, color: '#6EE7B7', href: '/setting' },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header title={"Admin panel"} />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <motion.div
          className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
            isSidebarOpen ? 'w-60' : 'w-20'
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
                <Link key={item.href} to={item.href}>
                  <motion.div className="flex items-center p-2 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                    <item.icon size={20} style={{ color: item.color, minWidth: '20px' }} />
                    <AnimatePresence>
                      {isSidebarOpen && (
                        <motion.span
                          className="ml-4 whitespace-nowrap"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2, delay: 0.3 }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Main Content Area */}
       
      </div>
    </div>
  );
};

export default Sidebar;

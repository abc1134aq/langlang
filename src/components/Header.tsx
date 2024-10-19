import React from 'react';
import { Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Newspaper size={24} />
          <span className="text-xl font-bold">江西软件职业技术大学新闻</span>
        </Link>
        <SearchBar />
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">首页</Link></li>
            <li><Link to="/categories" className="hover:underline">分类</Link></li>
            <li><Link to="/about" className="hover:underline">关于我们</Link></li>
            <li><Link to="/admin" className="hover:underline">管理</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
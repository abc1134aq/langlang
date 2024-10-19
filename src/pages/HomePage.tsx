import React, { useState } from 'react';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';
import { NewsArticle } from '../types';

const dummyArticles: NewsArticle[] = [
  // ... (keep existing dummy articles)
  // Add more dummy articles to test pagination
];

const ITEMS_PER_PAGE = 6;

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = dummyArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(dummyArticles.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">最新新闻</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
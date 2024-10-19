import React from 'react';
import { NewsArticle } from '../types';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.content.substring(0, 100)}...</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
        <Link to={`/article/${article.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          阅读更多
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NewsArticle } from '../types';

const dummyArticles: NewsArticle[] = [
  // ... (use the same dummy articles from HomePage)
];

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  const filteredArticles = dummyArticles.filter(
    article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">搜索结果: "{query}"</h1>
      {filteredArticles.length > 0 ? (
        <ul>
          {filteredArticles.map(article => (
            <li key={article.id} className="mb-4">
              <Link to={`/article/${article.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {article.title}
              </Link>
              <p className="text-gray-600 mt-1">{article.content.substring(0, 150)}...</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>没有找到相关结果。</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
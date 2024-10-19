import React, { useState } from 'react';
import { NewsArticle } from '../types';

const AdminPage: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [newArticle, setNewArticle] = useState<Partial<NewsArticle>>({
    title: '',
    content: '',
    author: '',
    category: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewArticle(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setArticles(prev =>
        prev.map(article =>
          article.id === editingId
            ? { ...article, ...newArticle, id: editingId }
            : article
        )
      );
      setEditingId(null);
    } else {
      const article: NewsArticle = {
        ...newArticle as NewsArticle,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
      };
      setArticles(prev => [...prev, article]);
    }
    setNewArticle({ title: '', content: '', author: '', category: '' });
  };

  const handleEdit = (article: NewsArticle) => {
    setNewArticle(article);
    setEditingId(article.id);
  };

  const handleDelete = (id: string) => {
    setArticles(prev => prev.filter(article => article.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">管理新闻文章</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">标题</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newArticle.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2">内容</label>
          <textarea
            id="content"
            name="content"
            value={newArticle.content}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block mb-2">作者</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newArticle.author}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">分类</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newArticle.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {editingId ? '更新文章' : '发布文章'}
        </button>
      </form>
      <h2 className="text-2xl font-bold mb-4">已发布文章</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-600">{article.date} - {article.author}</p>
            <div className="mt-2">
              <button
                onClick={() => handleEdit(article)}
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
              >
                编辑
              </button>
              <button
                onClick={() => handleDelete(article.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                删除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
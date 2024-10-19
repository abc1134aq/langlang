import React from 'react';
import { useParams } from 'react-router-dom';
import { NewsArticle } from '../types';

const dummyArticles: NewsArticle[] = [
  {
    id: '1',
    title: '江西软件职业技术大学举办2024年春季招聘会',
    content: '为促进毕业生就业，我校于2024年3月15日在体育馆举办了春季招聘会。共有200多家企业参加，提供岗位3000多个。招聘会现场人头攒动，气氛热烈。我校就业指导中心主任王明表示，此次招聘会为毕业生提供了丰富的就业机会，也展现了我校学生的良好素质和专业能力。多家参会企业对我校毕业生的综合素质给予了高度评价，现场达成就业意向300余人。',
    author: '张三',
    date: '2024-03-16',
    category: '校园活动',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  // Add more dummy articles as needed
];

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = dummyArticles.find(a => a.id === id);

  if (!article) {
    return <div className="container mx-auto px-4 py-8">文章不存在</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="mb-4 text-gray-600">
        <span>{article.author} | {article.date} | {article.category}</span>
      </div>
      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-md" />
      )}
      <div className="prose max-w-none">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
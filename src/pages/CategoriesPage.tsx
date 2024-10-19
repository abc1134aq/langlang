import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../types';

const categories = ['校园活动', '学生成就', '教育新闻', '科研动态', '通知公告'];

const dummyArticles: NewsArticle[] = [
  {
    id: '1',
    title: '江西软件职业技术大学举办2024年春季招聘会',
    content: '为促进毕业生就业，我校于2024年3月15日在体育馆举办了春季招聘会。共有200多家企业参加，提供岗位3000多个...',
    author: '张三',
    date: '2024-03-16',
    category: '校园活动',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '2',
    title: '我校学生在全国软件开发大赛中获得一等奖',
    content: '在刚刚结束的2024年全国大学生软件开发大赛中，我校计算机科学与技术专业的学生团队凭借出色的表现...',
    author: '李四',
    date: '2024-03-10',
    category: '学生成就',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  // Add more dummy articles for different categories
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">新闻分类</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {categories.map(category => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition duration-300"
          >
            {category}
          </Link>
        ))}
      </div>
      <div>
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <ul>
              {dummyArticles
                .filter(article => article.category === category)
                .slice(0, 3)
                .map(article => (
                  <li key={article.id} className="mb-2">
                    <Link to={`/article/${article.id}`} className="text-blue-600 hover:underline">
                      {article.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
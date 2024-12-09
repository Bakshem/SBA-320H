import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/ArticleDetail.css';
const ArticleDetail = () => {
 const { id } = useParams();
 const [article, setArticle] = useState(null);
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  const fetchArticleDetail = async () => {
   try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${id}&apiKey=${process.env.NEWS_API_KEY}`);
    setArticle(response.data.articles[0]);
   } catch (error) {
    console.error('Error fetching article detail', error);
   } finally {
    setLoading(false);
   }
  };
  fetchArticleDetail();
 }, [id]);
 if (loading) return <div className="loading">Loading...</div>;
 return (
  <div className="article-detail">
   <h1>{article.title}</h1>
   <img src={article.urlToImage} alt={article.title} />
   <div className='author'>
    Author: {article.author || 'Unknown'}
   </div>
   <div className='description'>
    <h2>Description</h2>
    <p>{article.description}</p>
   </div>
   <div className="content">
    <h2>Content</h2>
    <p>{article.content}</p>
   </div>
   <div className='source'>
    <h2>Source</h2>
    <a href={article.url}>Read Full Article</a>
   </div>
  </div>
 );
};
export default ArticleDetail;        
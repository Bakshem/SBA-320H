import React, { useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import '../assets/styles/Search.css';

const Search = () => {
 const [query, setQuery] = useState('');
 const [country, setCountry] = useState('us');
 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(false);
 
 const handleSearch = async () => {
  if (query) {
   setLoading(true);
   try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&country=${country}&apiKey=${process.env.NEWS_API_KEY}`);
    setArticles(response.data.articles || []);
   } catch (error) {
    console.error('Error searching news', error);
   } finally {
    setLoading(false);
   }
  }
 };
 return (
  <div className="search">
   <h1>Search News</h1>
   <div className='search-controls'>
    <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a keyword"
    />
    <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="us">United States</option>
        <option value="tr">Türkiye</option>
        <option value="gb">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="jp">Japan</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="br">Brazil</option>
        <option value="in">India</option>
    </select>
    <button onClick={handleSearch}>Search</button>
   </div>
   {loading ? (
    <div className="loading">Loading...</div>
   ) : (
    <div className="article-list">
     {articles.map((article,index) => (
      <ArticleCard key={index} article={article} />
     ))}
    </div>
   )}
  </div>
 );
};
export default Search;
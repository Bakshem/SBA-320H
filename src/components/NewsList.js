import React from "react";
import NewsCard from "./Navbar";

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <NewsCard key={index} title={article.title} description={article.description} url={article.url} source={article.source.name} />
            ))}
        </div>
    );
};

export default NewsList;
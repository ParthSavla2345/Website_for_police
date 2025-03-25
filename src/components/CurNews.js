import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CurNews.css';


const Modal = ({ news, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close_btn" onClick={onClose}>X</button>
        <h2>{news.title}</h2>
        <hr />
        <p><strong>Description:</strong> {news.description || 'No description available.'}</p>
       
        <a 
          href={news.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="read-full-article">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

function CurNews() {
  const [newsData, setNewsData] = useState([]); // newsData will contain the data fetched from the api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // default language is set to english
  const [languages] = useState([
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'kn', label: 'Kannada' },
    { code: 'ml', label: 'Malayalam' },
    { code: 'mr', label: 'Marathi' },
  ]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: 'pub_684306b2b11738a15d33b3bbcd25c3a55b138',
            q: 'news',
            country: 'in',
            language: selectedLanguage,
            category: 'crime',
          },
        });

        setNewsData(response.data.results); // newsdata will contain the data returned by the api
        setLoading(false);
      } catch (error) {
        setError('Error fetching news');
        setLoading(false);
      }
    };
    fetchNews();
  }, [selectedLanguage]); // useEffect can be rendered in two ways , one is initial render and when selectedLanguage is changed

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setLoading(true);
  };

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  if (loading) {
    return <div className="loading">Loading news...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="news-container">
      <h1>Latest News</h1>


      <div className="language-dropdown">
      <label className="label1">Select Language: </label>
        <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>
      </div>

      <div className="news-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-card" onClick={() => handleNewsClick(news)}>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </div>
        ))}
      </div>

      {selectedNews && <Modal news={selectedNews} onClose={handleCloseModal} />}
    </div>
  );
}

export default CurNews;

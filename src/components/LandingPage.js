import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page">
      <Header />
      <main className="landing-main">
        <section className="intro">
          <h1>Welcome to Movie Watchlist</h1>
          <p>Track and manage your favorite movies effortlessly</p>
          <button onClick={() => handleCardClick('/movies')} className="landing-button">Get Started</button>
        </section>
        <section className="features">
          <Card title="Track Movies" description="Keep a list of movies you want to watch." onClick={() => handleCardClick('/movies')} />
          <Card title="Rate & Review" description="Rate and review movies you've watched." onClick={() => handleCardClick('/rate-review')} />
          <Card title="Discover New Movies" description="Find new movies based on your preferences." onClick={() => handleCardClick('/discover')} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;




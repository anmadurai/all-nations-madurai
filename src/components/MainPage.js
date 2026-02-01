import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/MainPage.css';

const MainPage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const track = scrollRef.current;
    track.innerHTML += track.innerHTML; // duplicate for infinite scroll
  }, []);

  return (
    <div id="mainContent" className="page">
      <Header />

      <section className="hero">
        <h1>Watch the Word of God</h1>
        <p>Secure streaming of sermons & worship</p>
        <Link to="/videos">
          <button>▶ Watch All Sermons</button>
        </Link>
      </section>

      <section className="section">
        <h2>Latest Sermons</h2>

        <div className="auto-scroll">
          <div className="auto-scroll-track" ref={scrollRef}>
            {/* cards */}
            {[
              'TB8ZyH2bxUw',
              'CZy3KwSTtFE',
              'la3Dy_LubAE'
            ].map(id => (
              <div className="card" key={id}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={id}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default MainPage;

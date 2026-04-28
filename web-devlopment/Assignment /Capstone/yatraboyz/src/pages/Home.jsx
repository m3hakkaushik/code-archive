import { NavLink } from 'react-router-dom';
import { useTrips } from '../context/TripContext';
import './Home.css';

const FEATURED = [
  { name: 'Goa', emoji: '🏖️', tagline: 'Beaches & Bliss', category: 'Beach', rating: 4.8, price: '₹8,000' },
  { name: 'Manali', emoji: '🏔️', tagline: 'Snow-capped Dreams', category: 'Mountain', rating: 4.9, price: '₹12,000' },
  { name: 'Jaipur', emoji: '🏯', tagline: 'Pink City Magic', category: 'Heritage', rating: 4.7, price: '₹6,500' },
  { name: 'Kerala', emoji: '🌴', tagline: 'Gods Own Country', category: 'Nature', rating: 4.9, price: '₹10,000' },
  { name: 'Ladakh', emoji: '🛤️', tagline: 'Land of High Passes', category: 'Adventure', rating: 5.0, price: '₹18,000' },
  { name: 'Rishikesh', emoji: '🌊', tagline: 'Adventure Capital', category: 'Adventure', rating: 4.6, price: '₹5,000' },
];

function Home() {
  const { trips } = useTrips();

  return (
    <div className='home'>
      {/* Hero */}
      <section className='hero'>
        <div className='hero-bg-shape' />
        <div className='container hero-content fade-up'>
          <span className='tag'>🗺️ Your travel companion</span>
          <h1 className='hero-title'>
            Explore India,<br />
            <span className='hero-accent'>Plan Smarter.</span>
          </h1>
          <p className='hero-sub'>
            From snow peaks to sun-kissed shores — YatraBoyz helps you plan every trip with precision, joy, and zero stress.
          </p>
          <div className='hero-cta'>
            <NavLink to='/explore' className='btn-primary'>Explore Destinations</NavLink>
            <NavLink to='/planner' className='hero-link'>+ Create Trip</NavLink>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='stats container'>
        {[
          { val: '50+', label: 'Destinations' },
          { val: trips.length, label: 'Trips Planned' },
          { val: '100%', label: 'Free to Use' },
          { val: '4.9★', label: 'User Rating' },
        ].map((s, i) => (
          <div className='stat-card card' key={i}>
            <div className='stat-val'>{s.val}</div>
            <div className='stat-label'>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Featured */}
      <section className='featured container'>
        <div className='section-header'>
          <h2>Popular Destinations</h2>
          <NavLink to='/explore' className='see-all'>See all →</NavLink>
        </div>
        <div className='dest-grid'>
          {FEATURED.map((d, i) => (
            <div className='dest-card card fade-up' key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className='dest-emoji'>{d.emoji}</div>
              <div className='dest-info'>
                <div className='dest-top'>
                  <h3>{d.name}</h3>
                  <span className='tag'>{d.category}</span>
                </div>
                <p className='dest-tagline'>{d.tagline}</p>
                <div className='dest-bottom'>
                  <span className='dest-rating'>⭐ {d.rating}</span>
                  <span className='dest-price'>from {d.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className='cta-banner container'>
        <div className='cta-inner card'>
          <h2>Ready to plan your next yatra?</h2>
          <p>Create your trip, set your budget, and track every rupee.</p>
          <NavLink to='/planner' className='btn-primary'>Start Planning →</NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;

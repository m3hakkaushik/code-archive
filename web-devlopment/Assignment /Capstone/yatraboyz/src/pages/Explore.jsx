import { useState, useMemo } from 'react';
import './Explore.css';

const ALL_DESTINATIONS = [
  { name: 'Goa', emoji: '🏖️', category: 'Beach', rating: 4.8, price: 8000, desc: 'Sun, sand & seafood paradise.' },
  { name: 'Manali', emoji: '🏔️', category: 'Mountain', rating: 4.9, price: 12000, desc: 'Snow-capped peaks and adventure.' },
  { name: 'Jaipur', emoji: '🏯', category: 'Heritage', rating: 4.7, price: 6500, desc: 'Forts, palaces and royal culture.' },
  { name: 'Kerala', emoji: '🌴', category: 'Nature', rating: 4.9, price: 10000, desc: "Backwaters, spices and God's own country." },
  { name: 'Ladakh', emoji: '🛤️', category: 'Adventure', rating: 5.0, price: 18000, desc: 'Barren beauty and high altitude thrills.' },
  { name: 'Rishikesh', emoji: '🌊', category: 'Adventure', rating: 4.6, price: 5000, desc: 'River rafting and yoga capital.' },
  { name: 'Mysore', emoji: '🕌', category: 'Heritage', rating: 4.5, price: 5500, desc: 'Palaces, silk and sandalwood.' },
  { name: 'Andaman', emoji: '🐠', category: 'Beach', rating: 4.8, price: 22000, desc: 'Crystal clear waters and coral reefs.' },
  { name: 'Coorg', emoji: '☕', category: 'Nature', rating: 4.7, price: 7000, desc: 'Coffee estates and misty hills.' },
  { name: 'Spiti', emoji: '🏕️', category: 'Mountain', rating: 4.8, price: 15000, desc: 'Remote valley, raw Himalayan beauty.' },
  { name: 'Varanasi', emoji: '🛕', category: 'Heritage', rating: 4.6, price: 6000, desc: 'Spiritual capital of India.' },
  { name: 'Meghalaya', emoji: '🌧️', category: 'Nature', rating: 4.9, price: 13000, desc: 'Wettest place, living root bridges.' },
];

const CATEGORIES = ['All', 'Beach', 'Mountain', 'Heritage', 'Nature', 'Adventure'];

function Explore() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('rating');

  const filtered = useMemo(() => {
    let list = ALL_DESTINATIONS.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.desc.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === 'All' || d.category === category;
      return matchSearch && matchCat;
    });

    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === 'price_asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [search, category, sort]);

  return (
    <div className='explore container'>
      <div className='explore-header fade-up'>
        <h2>Explore Destinations</h2>
        <p>Discover India's most breathtaking places</p>
      </div>

      {/* Search & Filters */}
      <div className='explore-controls card fade-up'>
        <input
          className='search-input'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='🔍  Search destinations...'
        />
        <select className='sort-select' value={sort} onChange={e => setSort(e.target.value)}>
          <option value='rating'>Sort: Top Rated</option>
          <option value='price_asc'>Sort: Price Low→High</option>
          <option value='price_desc'>Sort: Price High→Low</option>
        </select>
      </div>

      {/* Category Filters */}
      <div className='category-filters fade-up'>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`cat-btn ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className='results-count'>{filtered.length} destination{filtered.length !== 1 ? 's' : ''} found</p>

      {/* Grid */}
      <div className='explore-grid'>
        {filtered.length === 0 ? (
          <div className='no-results'>
            <span>😕</span>
            <p>No destinations match your search.</p>
          </div>
        ) : (
          filtered.map((d, i) => (
            <div className='exp-card card fade-up' key={d.name} style={{ animationDelay: `${i * 0.06}s` }}>
              <div className='exp-emoji'>{d.emoji}</div>
              <div className='exp-body'>
                <div className='exp-top'>
                  <h3>{d.name}</h3>
                  <span className='tag'>{d.category}</span>
                </div>
                <p className='exp-desc'>{d.desc}</p>
                <div className='exp-footer'>
                  <span className='exp-rating'>⭐ {d.rating}</span>
                  <span className='exp-price'>from ₹{d.price.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Explore;

import { useState } from 'react';
import { useTrips } from '../context/TripContext';
import './Planner.css';

const DESTINATIONS = [
  'Goa', 'Manali', 'Jaipur', 'Kerala', 'Ladakh', 'Rishikesh',
  'Mysore', 'Andaman', 'Coorg', 'Spiti', 'Varanasi', 'Meghalaya'
];

const EMPTY_FORM = { from : '', destination: '', budget: '', days: '', notes: '' };

function Planner() {
  const { trips, addTrip, deleteTrip, editTrip } = useTrips();
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.from.trim()) e.from = 'Please enter departure city';
    if (!form.destination) e.destination = 'Please select a destination';
    if (!form.budget || isNaN(form.budget) || Number(form.budget) <= 0) e.budget = 'Enter a valid budget';
    if (!form.days || isNaN(form.days) || Number(form.days) <= 0) e.days = 'Enter valid number of days';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    if (editId !== null) {
      editTrip(editId, form);
      setEditId(null);
    } else {
      addTrip({ ...form, budget: Number(form.budget), days: Number(form.days) });
    }
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const handleEdit = (trip) => {
    setForm({ destination: trip.destination, budget: trip.budget, days: trip.days, notes: trip.notes || '' });
    setEditId(trip.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    setEditId(null);
    setErrors({});
  };

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className='planner container'>
      {/* Form */}
      <div className='planner-layout'>
        <div className='planner-form card fade-up'>
          <h2>{editId ? '✏️ Edit Trip' : '➕ Plan a Trip'}</h2>
          <div className='form-group'>
            <label>From</label>
            <input
            type="text"
            value={form.from}
            onChange={(e)=>handleChange('from', e.target.value)}
            placeholder="e.g. Delhi"
            className={errors.from ? 'input-error' : ''}
            />

            {errors.from && (
            <span className="error-msg">
              {errors.from}
            </span>
            )}
          </div>
          <div className='form-group'>
            <label>Destination</label>
            <select
              value={form.destination}
              onChange={e => handleChange('destination', e.target.value)}
              className={errors.destination ? 'input-error' : ''}
            >
              <option value=''>Select destination...</option>
              {DESTINATIONS.map(d => <option key={d}>{d}</option>)}
            </select>
            {errors.destination && <span className='error-msg'>{errors.destination}</span>}
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label>Budget (₹)</label>
              <input
                type='number'
                value={form.budget}
                onChange={e => handleChange('budget', e.target.value)}
                placeholder='e.g. 15000'
                className={errors.budget ? 'input-error' : ''}
              />
              {errors.budget && <span className='error-msg'>{errors.budget}</span>}
            </div>
            <div className='form-group'>
              <label>Number of Days</label>
              <input
                type='number'
                value={form.days}
                onChange={e => handleChange('days', e.target.value)}
                placeholder='e.g. 5'
                className={errors.days ? 'input-error' : ''}
              />
              {errors.days && <span className='error-msg'>{errors.days}</span>}
            </div>
          </div>

          <div className='form-group'>
            <label>Notes (optional)</label>
            <textarea
              value={form.notes}
              onChange={e => handleChange('notes', e.target.value)}
              placeholder='Any special plans, must-visits...'
              rows={3}
            />
          </div>

          <div className='form-actions'>
            <button className='btn-primary' onClick={handleSubmit}>
              {editId ? 'Save Changes' : 'Create Trip'}
            </button>
            {editId && (
              <button className='btn-danger' onClick={handleCancel}>Cancel</button>
            )}
          </div>
        </div>

        {/* Budget Calculator */}
        <BudgetCalculator />
      </div>

      {/* Trip List */}
      <div className='trips-section'>
        <h2>My Trips ({trips.length})</h2>
        {trips.length === 0 ? (
          <div className='empty-state card'>
            <span>🗺️</span>
            <p>No trips yet! Plan your first adventure above.</p>
          </div>
        ) : (
          <div className='trips-grid'>
            {trips.map(t => (
              <TripCard key={t.id} trip={t} onEdit={handleEdit} onDelete={deleteTrip} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TripCard({ trip, onEdit, onDelete }) {
  const daily = trip.days ? Math.round(trip.budget / trip.days) : 0;

  return (
    <div className='trip-card card fade-up'>
      <div className='trip-header'>
        <div>
          <h3>{trip.from} → {trip.destination}</h3>
          <span className='trip-meta'>{trip.days} days · ₹{Number(trip.budget).toLocaleString('en-IN')}</span>
        </div>
        <span className='tag'>₹{daily.toLocaleString('en-IN')}/day</span>
      </div>
      {trip.notes && <p className='trip-notes'>{trip.notes}</p>}
      <div className='trip-actions'>
        <button className='btn-edit' onClick={() => onEdit(trip)}>Edit</button>
        <button className='btn-danger' onClick={() => onDelete(trip.id)}>Delete</button>
      </div>
    </div>
  );
}

function BudgetCalculator() {
  const [dest, setDest] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState(null);

  const BASE_COSTS = {
    'Goa': { hotel: 2500, food: 800, transport: 600 },
    'Manali': { hotel: 2000, food: 700, transport: 500 },
    'Jaipur': { hotel: 1800, food: 600, transport: 400 },
    'Kerala': { hotel: 3000, food: 900, transport: 700 },
    'Ladakh': { hotel: 2500, food: 800, transport: 1200 },
    'Rishikesh': { hotel: 1500, food: 500, transport: 300 },
  };

  const calculate = () => {
    if (!dest || !days || !budget) return;
    const costs = BASE_COSTS[dest] || { hotel: 2000, food: 700, transport: 500 };
    const d = Number(days);
    const b = Number(budget);
    const hotelTotal = costs.hotel * d;
    const foodTotal = costs.food * d;
    const transportTotal = costs.transport * d;
    const total = hotelTotal + foodTotal + transportTotal;
    setResult({ hotelTotal, foodTotal, transportTotal, total, remaining: b - total, days: d });
  };

  return (
    <div className='budget-calc card fade-up'>
      <h3>💰 Budget Calculator</h3>
      <p className='calc-sub'>Estimate your trip costs instantly</p>

      <select value={dest} onChange={e => setDest(e.target.value)}>
        <option value=''>Select destination</option>
        {['Goa', 'Manali', 'Jaipur', 'Kerala', 'Ladakh', 'Rishikesh'].map(d => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <input type='number' placeholder='Days' value={days} onChange={e => setDays(e.target.value)} />
      <input type='number' placeholder='Total Budget (₹)' value={budget} onChange={e => setBudget(e.target.value)} />

      <button className='btn-primary' onClick={calculate}>Calculate</button>

      {result && (
        <div className='calc-result'>
          <div className='calc-row'><span>🏨 Hotels ({result.days}d)</span><span>₹{result.hotelTotal.toLocaleString('en-IN')}</span></div>
          <div className='calc-row'><span>🍽️ Food</span><span>₹{result.foodTotal.toLocaleString('en-IN')}</span></div>
          <div className='calc-row'><span>🚌 Transport</span><span>₹{result.transportTotal.toLocaleString('en-IN')}</span></div>
          <div className='calc-divider' />
          <div className='calc-row total'><span>Total Est.</span><span>₹{result.total.toLocaleString('en-IN')}</span></div>
          <div className={`calc-row ${result.remaining >= 0 ? 'surplus' : 'deficit'}`}>
            <span>{result.remaining >= 0 ? '✅ Remaining' : '⚠️ Over budget'}</span>
            <span>₹{Math.abs(result.remaining).toLocaleString('en-IN')}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Planner;

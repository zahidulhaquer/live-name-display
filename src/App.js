import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h2>Type Your Name</h2>

      <input
        type="text"
        placeholder="Enter name here"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />

      <p style={{ marginTop: '20px', fontSize: '20px' }}>
        Hello, <strong>{name || 'Stranger'}</strong>!
      </p>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
 // Import your CSS file for styling

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signin-container">
      <h2>Welcome to your professional community</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email or phone</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-button">Sign in</button>
      </form>
      <div className="signin-footer">
        <a href="/forgot-password">Forgot password?</a>
        <a href="/join">New to LinkedIn? Join now</a>
      </div>
    </div>
  );
};

export default SignInForm;

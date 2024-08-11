import React, { useState } from 'react';
 // Import your CSS file for styling

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signin-container py-6 px-7 mt-24 mb-11">
      <h2>Welcome to your professional community</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email or phone</label>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        <a href="/join">New to cybrom connect ? Join now</a>
      </div>
    </div>
  );
};

export default SignInForm;

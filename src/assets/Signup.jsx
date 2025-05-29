import React, { useState, useEffect } from 'react';
//import './Signup.css'; Create this CSS file for styling

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [showPasswordHint, setShowPasswordHint] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const getPasswordStrength = (password) => {
    if (password.length < 8) return 'weak';
    if (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)) return 'strong';
    return 'medium';
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      const strength = getPasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    
    // Validate password
    const passwordValid = validatePassword(formData.password);
    if (!passwordValid) {
      setErrors(prev => ({ ...prev, password: 'Password does not meet the requirements.' }));
      return;
    } else {
      setErrors(prev => ({ ...prev, password: '' }));
    }

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match!' }));
      return;
    } else {
      setErrors(prev => ({ ...prev, confirmPassword: '' }));
    }

    // Form is valid - proceed with submission
    setMessage('Signup successful!');
    console.log('Form submitted:', formData);
    // Here you would typically make an API call to your backend
  };

  return (
    <div className="signup-container">
      <h1>Signup Form</h1>
      
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setShowPasswordHint(true)}
            onBlur={() => setShowPasswordHint(false)}
            required
          />
          
          {showPasswordHint && (
            <div className="password-hint">
              Password must be at least 8 characters long, and include at
              least one uppercase letter, one lowercase letter, one
              number, and one special character (@$!%*?&).
            </div>
          )}
          
          {errors.password && <span className="error">{errors.password}</span>}
          
          {formData.password && (
            <div className="password-strength">
              <div className={`strength-bar ${passwordStrength}`}>
                <span>Password Strength: {passwordStrength}</span>
              </div>
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="submit-btn">Signup</button>
      </form>

      {message && <p className="message" style={{ color: 'green' }}>{message}</p>}
      <p> Already have an Account? <a href='login'> Login</a></p>
    </div>
  );
}

export default Signup;
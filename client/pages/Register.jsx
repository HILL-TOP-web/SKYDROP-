import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    profilePicture: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();

    Meteor.call('auth.register', form, (err) => {
      if (err) {
        alert(err.reason);
      } else {
        alert('Account created');
        window.location.href = '/login';
      }
    });
  };

  return (
    <AuthLayout>
      <h2>Create Account</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="text"
          placeholder="Profile Picture URL"
          onChange={(e) => setForm({ ...form, profilePicture: e.target.value })}
        />

        <button type="submit">Register</button>
      </form>
    </AuthLayout>
  );
    }

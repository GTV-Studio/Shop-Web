import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError("An error occurred while processing your request.");
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type='text' placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='text' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Bạn đã có tài khoản?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
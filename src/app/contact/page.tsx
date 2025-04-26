'use client';
import { useState } from 'react';

const ContactPage = () => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User message:', message); 
    setSent(true);
  };

  return (
    <div  style={{
      maxWidth: '28rem', 
      margin: '2.5rem auto', 
      padding: '1rem', 
    backgroundColor: 'white', 
      borderRadius: '0.375rem', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    }}>
      <h2   style={{
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginBottom: '1rem', 
         color: '#1f2937', 
        }}>Send me a message</h2>
      {sent ? (
        <p style={{
          color: '#10b981', 
        }}>Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
             style={{
              width: '100%', 
              height: '8rem', 
              padding: '0.5rem', 
              border: '1px solid #d1d5db', 
              borderRadius: '0.375rem', 
              backgroundColor: '#1f2937', 
              color: 'white', 
            }}
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            style={{
              marginTop: '0.75rem', 
              padding: '0.5rem 1rem', 
              backgroundColor: '#2563eb', 
              color: 'white', 
              borderRadius: '0.375rem', 
              cursor: 'pointer',
              transition: 'background-color 0.2s', 
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')} 
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;

import React from 'react';

const page = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      padding: '40px'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#2d3748',
        marginBottom: '16px'
      }}>
        Dashboard Home Page
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '8px' }}>
        Welcome to the dashboard!
      </p>
      <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '8px' }}>
        This is your one-stop solution for managing all your IDs efficiently.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '8px' }}>
        Get started by selecting an option from the sidebar.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '8px' }}>
        Need help? Check out our documentation or contact support.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#3182ce', fontWeight: '500' }}>
        We're here to help you succeed!
      </p>
    </div>
  );
};

export default page;
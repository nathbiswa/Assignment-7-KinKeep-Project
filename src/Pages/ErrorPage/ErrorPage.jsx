import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <h2>This is error page</h2>
            <p>Sorry, the page you are looking for does not exist.</p>

            <button 
                onClick={() => navigate('/')}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;
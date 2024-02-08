import React from 'react';

const Home = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ fontWeight: 'bold' }}>Welcome!</h3>
            <br/>
            <p style={{ marginBottom: '10px' }}><small className="text-muted">Public figure refers to individuals who are widely recognized or have a significant presence in the public sphere due to their involvement in various fields.</small></p>
            <p><small className="text-muted">They often have a public platform, influence, and visibility that extends beyond their immediate community or industry.</small></p>
        </div>
    );
}

export default Home

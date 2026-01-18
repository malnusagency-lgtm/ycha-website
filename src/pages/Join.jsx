import React from 'react';
import joinImg from '../assets/images/join-1.jpg';

const Join = () => {
    return (
        <div className="join-page" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img src={joinImg} alt="Join Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, padding: '3rem', minWidth: '300px' }}>
                        <h1 style={{ marginBottom: '1rem' }}>Join the Movement</h1>
                        <p style={{ marginBottom: '2rem' }}>
                            Ready to make a difference? Fill out the form below to become a member or volunteer.
                        </p>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }} placeholder="Your Name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                                <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }} placeholder="you@example.com" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Interested In</label>
                                <select style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}>
                                    <option>Volunteering</option>
                                    <option>Membership</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>Submit Application</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;

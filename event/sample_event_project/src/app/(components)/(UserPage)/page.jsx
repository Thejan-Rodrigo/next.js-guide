import React from 'react'

function page({ user }) {
    if (!user) return <p>User not found.</p>;
    return (
        <div style={{
            maxWidth: '400px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
        }}>
            <img
                src={`https://randomuser.me/api/portraits/${user.gender === 'male' ? 'men' : 'women'}/${user.id % 100}.jpg`}
                alt="User"
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px',
                }}
            />
            <h2 style={{ marginBottom: '10px' }}>
                {user.firstName} {user.lastName}
            </h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Country:</strong> {user.country}</p>
        </div>
    )
}

export default page
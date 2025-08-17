import { useState, React } from 'react';

function page() {

    const [inputValue1, setInputValue1] = useState('');
    const peopleData = [
        { firstName: 'Alice', lastName: 'Johnson', age: 24, country: 'USA' },
        { firstName: 'Liam', lastName: 'Smith', age: 30, country: 'UK' },
        { firstName: 'Noah', lastName: 'Brown', age: 27, country: 'Canada' },
        { firstName: 'Emma', lastName: 'Wilson', age: 22, country: 'Australia' },
        { firstName: 'Olivia', lastName: 'Jones', age: 29, country: 'New Zealand' },
        { firstName: 'Ava', lastName: 'Taylor', age: 31, country: 'Ireland' },
        { firstName: 'Isabella', lastName: 'Lee', age: 26, country: 'Singapore' },
        { firstName: 'Sophia', lastName: 'White', age: 28, country: 'Germany' },
        { firstName: 'Mia', lastName: 'Clark', age: 23, country: 'France' },
        { firstName: 'Amelia', lastName: 'Walker', age: 35, country: 'USA' },
        { firstName: 'Thejan', lastName: 'Rodrigo', age: 21, country: 'Sri Lanka' },
        { firstName: 'Tehan', lastName: 'Rodrigo', age: 23, country: 'Sri Lanka' },
        { firstName: 'Kehan', lastName: 'Perera', age: 22, country: 'Sri Lanka' },
        { firstName: 'Dileepa', lastName: 'Piris', age: 23, country: 'Sri Lanka' },
        { firstName: 'Ethan', lastName: 'Hall', age: 33, country: 'UK' },
        { firstName: 'James', lastName: 'Young', age: 32, country: 'Canada' },
        { firstName: 'Benjamin', lastName: 'Allen', age: 21, country: 'Australia' },
        { firstName: 'Lucas', lastName: 'Wright', age: 25, country: 'New Zealand' },
        { firstName: 'Henry', lastName: 'King', age: 34, country: 'Ireland' },
        { firstName: 'Jack', lastName: 'Scott', age: 29, country: 'Singapore' },
        { firstName: 'Alexander', lastName: 'Green', age: 30, country: 'Germany' },
        { firstName: 'Logan', lastName: 'Baker', age: 28, country: 'France' },
        { firstName: 'Elijah', lastName: 'Adams', age: 26, country: 'USA' },
        { firstName: 'Daniel', lastName: 'Nelson', age: 24, country: 'UK' },
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted value:', inputValue);
        // You can add more logic here (e.g., send to API)
        setInputValue1('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
                <input
                    type="text"
                    placeholder="Enter here..."
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '70%',
                        marginRight: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Submit
                </button>
            </form>
            <h2>People Table</h2>
            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
                style={{
                    borderCollapse: 'collapse',
                    width: '100%',
                    fontFamily: 'Arial, sans-serif',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Full Name</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Age</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData.map((person, index) => (
                        <tr
                            key={index}
                            style={{
                                backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9',
                                borderBottom: '1px solid #ddd'
                            }}
                        >
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                                {person.firstName} {person.lastName}
                            </td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{person.age}</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{person.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default page
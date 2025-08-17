import { useState, React } from 'react';

function page() {

    const [inputValue1, setInputValue1] = useState('');
    const [hoveredRow, setHoveredRow] = useState(false);
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
        <div>
            <form
                onSubmit={handleSubmit}
                style={{
                    maxWidth: '600px',
                    margin: '0 auto 40px auto',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <input
                    type="text"
                    placeholder="Enter here..."
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    style={{
                        flex: '1',
                        padding: '12px 15px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#005bd1')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#0070f3')}
                >
                    Submit
                </button>
            </form>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
                    People Table
                </h2>
                <table
                    border="1"
                    cellPadding="10"
                    cellSpacing="0"
                    style={{
                        borderCollapse: 'collapse',
                        width: '100%',
                        fontFamily: 'Arial, sans-serif',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                >
                    <thead>
                        <tr style={{ backgroundColor: '#e9ecef', textAlign: 'left' }}>
                            <th style={{ padding: '14px', borderBottom: '2px solid #dee2e6' }}>Full Name</th>
                            <th style={{ padding: '14px', borderBottom: '2px solid #dee2e6' }}>Age</th>
                            <th style={{ padding: '14px', borderBottom: '2px solid #dee2e6' }}>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peopleData.map((person, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onMouseEnter={() => setHoveredRow(rowIndex)}
                                onMouseLeave={() => setHoveredRow(null)}
                                style={{
                                    backgroundColor:
                                        hoveredRow === rowIndex
                                            ? '#e0f2fe'
                                            : rowIndex % 2 === 0
                                                ? '#ffffff'
                                                : '#f1f3f5',
                                    transition: 'background-color 0.2s',
                                    cursor: 'default',
                                }}
                            >
                                <td style={{ padding: '12px', borderBottom: '1px solid #dee2e6' }}>
                                    <a href="https://www.youtube.com/watch?v=Hz1rdeJxltg&list=RD1RoNa3fjUFU&index=2">{person.firstName} {person.lastName}</a>
                                </td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dee2e6' }}>
                                    {person.age}
                                </td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dee2e6' }}>
                                    {person.country}
                                </td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            </div>
        </div>

    );
}

export default page
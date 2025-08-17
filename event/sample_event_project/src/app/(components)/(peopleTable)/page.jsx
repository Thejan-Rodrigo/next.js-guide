import { useState, React } from 'react';

function page() {

    const [inputValue1, setInputValue1] = useState('');
    const [hoveredRow, setHoveredRow] = useState(false);
    const peopleData = [
        { id: 1001, firstName: 'Alice', lastName: 'Johnson', age: 24, country: 'USA' },
        { id: 1002, firstName: 'Liam', lastName: 'Smith', age: 30, country: 'UK' },
        { id: 1003, firstName: 'Noah', lastName: 'Brown', age: 27, country: 'Canada' },
        { id: 1004, firstName: 'Emma', lastName: 'Wilson', age: 22, country: 'Australia' },
        { id: 1005, firstName: 'Olivia', lastName: 'Jones', age: 29, country: 'New Zealand' },
        { id: 1006, firstName: 'Ava', lastName: 'Taylor', age: 31, country: 'Ireland' },
        { id: 1007, firstName: 'Isabella', lastName: 'Lee', age: 26, country: 'Singapore' },
        { id: 1008, firstName: 'Sophia', lastName: 'White', age: 28, country: 'Germany' },
        { id: 1009, firstName: 'Mia', lastName: 'Clark', age: 23, country: 'France' },
        { id: 1010, firstName: 'Amelia', lastName: 'Walker', age: 35, country: 'USA' },
        { id: 1011, firstName: 'Thejan', lastName: 'Rodrigo', age: 21, country: 'Sri Lanka' },
        { id: 1012, firstName: 'Tehan', lastName: 'Rodrigo', age: 23, country: 'Sri Lanka' },
        { id: 1013, firstName: 'Kehan', lastName: 'Perera', age: 22, country: 'Sri Lanka' },
        { id: 1014, firstName: 'Dileepa', lastName: 'Piris', age: 23, country: 'Sri Lanka' },
        { id: 1015, firstName: 'Ethan', lastName: 'Hall', age: 33, country: 'UK' },
        { id: 1016, firstName: 'James', lastName: 'Young', age: 32, country: 'Canada' },
        { id: 1017, firstName: 'Benjamin', lastName: 'Allen', age: 21, country: 'Australia' },
        { id: 1018, firstName: 'Lucas', lastName: 'Wright', age: 25, country: 'New Zealand' },
        { id: 1019, firstName: 'Henry', lastName: 'King', age: 34, country: 'Ireland' },
        { id: 1020, firstName: 'Jack', lastName: 'Scott', age: 29, country: 'Singapore' },
        { id: 1021, firstName: 'Alexander', lastName: 'Green', age: 30, country: 'Germany' },
        { id: 1022, firstName: 'Logan', lastName: 'Baker', age: 28, country: 'France' },
        { id: 1023, firstName: 'Elijah', lastName: 'Adams', age: 26, country: 'USA' },
        { id: 1024, firstName: 'Daniel', lastName: 'Nelson', age: 24, country: 'UK' },
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
                                    <a href={`http://localhost:3000/${person.id}/user`}>{person.firstName} {person.lastName}</a>
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

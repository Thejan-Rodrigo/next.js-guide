import React from 'react'

function page() {
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

    return (
        <div style={{ padding: '20px' }}>
            <h2>People Table</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData.map((person, index) => (
                        <tr key={index}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                            <td>{person.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default page
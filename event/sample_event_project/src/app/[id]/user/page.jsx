import React from 'react';
import User from "../../(components)/(UserPage)/page"

function page({params}) {
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

    
  const userId = parseInt(params.id); // Get ID from URL and convert to number
  const user = peopleData.find((person) => person.id === userId); // Find matching user
  return (
     <div>
      <User user={user} />
    </div>
  )
}

export default page
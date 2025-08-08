import React from 'react'
import Link from 'next/link'

function page() {
    const items = [
        {
            "id": 1,
            "name": "Apples"
        },
        {
            "id": 2,
            "name": "Milk"
        },
        {
            "id": 3,
            "name": "Bread"
        },
        {
            "id": 4,
            "name": "Eggs"
        },
        {
            "id": 5,
            "name": "Rice"
        }
    ]
    return (
        <div>
            <h1>Groceries Page</h1>

                {items.map((item) => {
                    return (
                        <ul>
                            <li key={item.id}>
                                <Link href={`/products/groceries/${item.name}`}>{item.name}</Link>
                            </li>
                        </ul>
                    )
                })}
            
        </div>
    )
}

export default page
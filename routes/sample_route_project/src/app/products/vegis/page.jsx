import React from 'react'
import Link from 'next/link'

function page() {
    const items = [
  {
    "id": 1,
    "name": "Carrot"
  },
  {
    "id": 2,
    "name": "Spinach"
  },
  {
    "id": 3,
    "name": "Broccoli"
  },
  {
    "id": 4,
    "name": "Tomato"
  },
  {
    "id": 5,
    "name": "Cucumber"
  }
]
  return (
    <div>
    <h1>Vegis Page</h1>

    <div>
        <ul>
            {items.map((item) => {
                return(
                    <div>
                        <li key={item.id}>
                            <Link href={`/products/vegis/${item.name}`}>{item.name}</Link>
                        </li>
                    </div>
                )
            })}
        </ul>
    </div>
    </div>
  )
}

export default page
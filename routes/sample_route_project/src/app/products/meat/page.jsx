import React from 'react'
import Link from 'next/link'

function page() {
  const items = [
  {
    "id": 1,
    "name": "Chicken Breast"
  },
  {
    "id": 2,
    "name": "Beef Steak"
  },
  {
    "id": 3,
    "name": "Pork Chops"
  },
  {
    "id": 4,
    "name": "Lamb Leg"
  },
  {
    "id": 5,
    "name": "Turkey Thigh"
  }
]

  return (
    <div>
      
    <h1>Meat Page</h1>

    <div>
        <ul>
            {items.map((item) => {
                return(
                    <div>
                        <li key={item.id}>
                            <Link href={`/products/meat/${item.id}`}>{item.name}</Link>
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
import React from 'react'

function page({params}) {
  return (
    <h1>Meat Item {params.id} Review {params.rId}</h1>
  )
}

export default page
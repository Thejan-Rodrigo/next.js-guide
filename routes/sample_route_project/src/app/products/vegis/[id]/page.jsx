import React from 'react'

function page({params}) {
  return (
    <h1>Vegi Item {params.id}</h1>
  )
}

export default page
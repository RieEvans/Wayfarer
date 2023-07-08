import React from 'react'
import { useParams } from 'react-router-dom'

export const Hotelsdetail = () => {

    const {id} = useParams()
  return (
    <div>
        <h1>{id}</h1>
        <h2></h2>
    </div>
  )
}

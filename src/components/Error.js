import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const err= useRouteError();
    console.log(err);
  return (
    <div>
        <div>Opps!</div>
        <div>Something went wrong!!!</div>
        <h2>{err.status}: {err.statusText} {err.error.message}</h2>
    </div>
  )
}

export default Error
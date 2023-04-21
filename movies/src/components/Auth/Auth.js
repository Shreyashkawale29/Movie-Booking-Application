import React from 'react'
import AuthForm from './AuthForm'

const Admin = () => {
  const getData = (data) => {
    console.log("Auth",data);
  }
  return (
    <div>
      <AuthForm onSubmit={getData} />
    </div>
  )
}

export default Admin
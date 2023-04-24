import React from 'react'
import { sendAdminAuthRequest } from '../../Api-helpers/api-helpers';
import AuthForm from '../Auth/AuthForm'

const Admin = () => {
  const getData = (data) => { 
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  )
}

export default Admin
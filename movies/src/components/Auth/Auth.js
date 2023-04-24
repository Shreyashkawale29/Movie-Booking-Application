import React from 'react'
import { sendUserAuthRequest } from '../../Api-helpers/api-helpers';
import AuthForm from './AuthForm'

const Auth = () => {
  const getData = (data) => {
    console.log("Auth", data);
    sendUserAuthRequest(data.inputs, data.signup).then((res) => console.log
      (res)
    ).catch((err) => console.log(err))
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth
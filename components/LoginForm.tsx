import React, {  useRef} from 'react'
import { useMutation,gql } from '@apollo/client'

const LOGIN_USER_MUTATION = gql`
    mutation($loginUsername: String!, $loginPassword: String!){
      login(username: $loginUsername, password: $loginPassword) {
        accessToken
      }
}`

const LoginForm = () => {
  const passwordRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const [mutateFunction] = useMutation(LOGIN_USER_MUTATION)
  
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    if(!e.target.username.value){
      usernameRef?.current?.focus()
    }
    else if(!e.target.password.value){
      passwordRef?.current?.focus()
    }
    else{
      const res = await mutateFunction({variables:{
        "loginUsername":e.target.username.value ,
        "loginPassword": e.target.password.value
      }})
    }
}

return (
<div className="grid items-center ">
<form onSubmit={handleSubmit} className=" w-full  items-center  p-12 border-2 border-gray-600 rounded-lg ">
  <div className="md:flex md:items-center mb-6 ">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
       Username 
      </label>
    </div>
    <div className="md:w-2/3">
      <input ref={usernameRef} name="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  placeholder="Your Username" />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input name="password" ref={passwordRef} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
       Login 
      </button>
    </div>
  </div>
</form>
</div>
    )
}

export default LoginForm

import Quote from "../components/Quote"
import InputLable from "../components/InputLable"
import { Link, useNavigate } from "react-router-dom"
import { SinginInput } from "@karan_rawat_24/blogin-common"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
const Signin = () => {
  const [postInputs, setPostInputs] = useState<SinginInput>({
    username: "",
    password: ""
  })
  const navigate = useNavigate();

  const sendSigninRequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
      const jwt = response.data.jwt;
      console.log(jwt);
      localStorage.setItem('token', jwt);
      navigate('/blogs');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className=" h-screen flex justify-center items-center flex-col">
        <div className="text-3xl font-bold text-left mt-4">
          Welcome back again!
        </div>
        <div className="mt-1 text-gray-400">
          Don't have an account?<Link to="/signup" className="underline text-gray-600 ml-1">Signup</Link>
        </div>

        <div className="flex flex-col mt-2">

          <InputLable label={"Username"} type={"email"} placeholder={"karan@gamil.com"} onChange={(e) => {
            setPostInputs({
              ...postInputs,
              username: e.target.value
            })
          }} />
          <InputLable label={"Password"} type={"password"} placeholder={"karan123"} onChange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value
            })
          }} />

          <button className=" border-black bg-black text-white p-2 rounded-md mt-6" onClick={sendSigninRequest}>Sign in</button>
        </div>

      </div>
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  )
}

export default Signin
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"
function SignUp(props) {

    const navigate = useNavigate()
    const users = props.users
    const setUsers = props.setUsers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUinput(event) {
        setEusername(event.target.value)
    }

    function handlePinput(event) {
        setEpassword(event.target.value)
    }
    function addUser() {
        setUsers([...users,{username:eusername,password:epassword}])
        navigate("/")

    }

    return (
        <div className="bg-gray-950 p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium ">Hey! Hi👋</h1>
                <p>Sign Up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="UserName"
                        onChange={handleUinput} />

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePinput} />

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Confirm Password" />

                    <button className="bg-[#e50022] w-24 p-2 rounded-md text-white font-medium" onClick={addUser}>Sign Up</button>

                    <p>Already Have an Account ? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default SignUp
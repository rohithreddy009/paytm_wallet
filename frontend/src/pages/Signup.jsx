import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-gray-800 to-black">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-4/5 bg-white rounded-lg shadow-xl flex flex-col justify-center items-center overflow-auto">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your details to create an account"} />
                <div className="w-4/5 space-y-4">
                    <InputBox onChange={e => setFirstName(e.target.value)} placeholder="John" label={"First Name"} className="w-1" />
                    <InputBox onChange={e => setLastName(e.target.value)} placeholder="Doe" label={"Last Name"} className="w-full" />
                    <InputBox onChange={e => setUsername(e.target.value)} placeholder="johndoe@gmail.com" label={"Email"} className="w-full" />
                    <InputBox onChange={e => setPassword(e.target.value)} placeholder="*********" label={"Password"} className="w-full" />
                    <div className="pt-4 w-full flex justify-center">
                        <Button onClick={async () => {
                            const response = await axios.post("https://wallet-archived-backend.vercel.app/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard");
                        }} label={"Sign up"} className="w-full" />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    );
};


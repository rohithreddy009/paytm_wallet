import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../assets/LogoutIcon";
import { History } from "../assets/History";
import { Wallet } from "../assets/Wallet";

export const Appbar = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("name") || "User";

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        navigate("/signin");
    };

    const handleHistoryClick = () => {
        navigate('/history'); // Use the navigate function to change the route
    };

    return (
        <div className="shadow h-14 flex justify-between items-center px-4 bg-black">
            <div className="text-white border border-white p-2 m-2 flex items-center">
                <Wallet className="w-6 h-6 mr-2" />
                <span className="hidden sm:inline">Web2 Wallet</span>
            </div>

            <div className="flex items-center">
                <div className="text-white m-2 hidden sm:block">Hello, {userName}</div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mx-2 text-xl">
                    {userName.charAt(0)}
                </div>
                <button
                    onClick={handleHistoryClick}
                    className="bg-violet-500 text-white px-3 py-2 rounded hover:bg-violet-600 transition duration-150 ease-in-out flex items-center justify-center border border-white m-2"
                >
                    <History className="w-5 h-5"/>
                    <span className="hidden sm:block ml-2">History</span>
                </button>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-150 ease-in-out flex items-center justify-center border border-white m-2"
                >
                    <LogoutIcon className="w-5 h-5"/>
                    <span className="hidden sm:block ml-2">Logout</span>
                </button>
            </div>
        </div>
    );
};

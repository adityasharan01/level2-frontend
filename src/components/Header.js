import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = ({ email,setEmail }) => {
    const { theme,setTheme } = useContext(ThemeContext);

    useEffect(() => {
        axios.get(`https://level2-backend-ncu2-adityasharan01.vercel.app/user/theme/${email}`)
            .then(response => {
                const { data } = response;
                console.log(response);
                setTheme(data.theme);
            })
            .catch(error => {
                console.log("Error occured while Fetching !")
            });
    }, [email,theme]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <header className={`p-4 h-1200 bg-${theme}-500 flex items-center justify-center flex-col`}>
            <h1 className="text-black">Welcome to User preference Color finder website!</h1>
            <div className="max-w-sm w-full text-gray-600 flex items-center justify-center">
                <div className="max-w-sm w-full text-black">
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Find out Preference
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
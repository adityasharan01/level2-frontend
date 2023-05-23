import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/ThemeContext';

import { getBgColor } from '../utils/getBgColor';

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
    }, [email,setTheme]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <header className={`p-4 h-1000 bg-${getBgColor(theme)}-500 flex items-center justify-center flex-col`}>
            <h1 className="text-black">Welcome to User preference Color finder website!</h1>
            <div className="max-w-sm w-full text-gray-600 flex items-center justify-center">
                <div className="max-w-sm w-full text-black">
            
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
            </div>
        </header>
    );
};

export default Header;
import React, { useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/ThemeContext';

import { getBgColor } from '../utils/getBgColor';

const Main = ({ email }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = (event) => {

        const newTheme = event.target.value;
        setTheme(newTheme);
        axios.post('https://level2-backend-ncu2-adityasharan01.vercel.app/user/theme', { "email": email, "theme": newTheme })
            .then(response => {
                console.log("Updates Successfully!!");
            })
            .catch(error => {
                console.log("Error occured while updating !")
            });
    };

    return (
        <main className={`p-4 h-screen ${getBgColor(theme)} flex items-center justify-center flex-col`}>
            <select value={theme} onChange={handleThemeChange} className="w-auto bg-white rounded-lg shadow py-2 px-4 text-sm text-gray-700 border border-gray-300 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
        </main>
    );
};

export default Main;
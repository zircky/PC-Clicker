'use client'
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { FC, useEffect } from "react";

const Home: FC = () => {
    useEffect(() => {
        const { initDataRaw } = retrieveLaunchParams();
    
        // Отправка данных инициализации на сервер
        fetch('/api', {
        method: 'POST',
        headers: {
            Authorization: `tma ${initDataRaw}`
        },
        }).then(response => response.json())
        .then(data => console.log(data)) // Обработка полученных данных
        .catch(error => console.error('Error:', error)); // Обработка ошибок
    
      }, []);
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
        </div>
    );
}

export default Home;
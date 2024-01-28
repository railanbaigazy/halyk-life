'use client'

import { useState } from "react";
import { usePathname } from "next/navigation";


const MainHeader = () => {
    const pathname = usePathname()

    const pageTitle = 'Главная'
    const updateTitle = () => {
        if (pathname.includes('/admin/client')) {
            return 'Данные клиента'
        }
        switch (pathname) {
            case '/med':
                return 'Главная страница медицинского сотрудника'
            case '/med/upload-data':
                return 'Внесение данных клиента'
            case '/admin':
                return 'Главная страница сотрудника Halyk Life'
            default:
                return pageTitle
        }
    }
    return (
        <div className="p-10 text-2xl bg-white ">
            {updateTitle()}
        </div>
    );
};

export default MainHeader;
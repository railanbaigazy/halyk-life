'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const MainHeader = () => {
    const router = useRouter()

    const pageTitle = 'Главная'
    const updateTitle = () => {
        switch (router.pathname) {
            case '/':
                return 'Тест'
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
'use client'

import AdminFeed from "@components/admin/Feed";
import MainWrapper from "@components/MainWrapper";
import { useEffect, useState } from "react";

const AdminPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://164.92.228.128/api/v1/customers/");
            const data = await response.json();
            setData(data);
        };

        fetchData();

    }, []);

    return (
        <MainWrapper>
            <AdminFeed data={data}/>
        </MainWrapper>
    );
};

export default AdminPage;
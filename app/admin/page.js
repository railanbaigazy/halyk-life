'use client'

import { useState } from "react";
import AdminFeed from "@components/admin/Feed";

const AdminPage = () => {
    return (
        <div className="min-h-screen">
            <AdminFeed className="flex flex-row p-[40px]" />
        </div>
    );
};

export default AdminPage;
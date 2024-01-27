'use client'

import { useState } from "react";

const AdminPage = () => {

    const [searchText, setSearchText] = useState()

    const handleSearchChange = () => {

    }

    return (
        <div className="flex min-h-screen flex-row p-[40px]">
            <div className="flex flex-col w-2/3">
                <form name="search" className="relative w-full flex-center">
                    <input
                        type="text"
                        placeholder="Search for a tag or username"
                        value={searchText}
                        onChange={handleSearchChange}
                        required
                        className="search_input peer"
                    />
                </form>
            </div>
            <div className="flex flex-col">
                birdene2
            </div>
        </div>
    );
};

export default AdminPage;
'use client'

import { useState } from "react";
import ClientCardList from "@components/admin/ClientCardList";
import RightBar from "./RightBar/RightBar";

const AdminFeed = () => {
    const allClients = [];
    const [clients, setClients] = useState(allClients)

    const [searchText, setSearchText] = useState()
    const [searchedClients, setSearchedClients] = useState([])
    const [searchTimeout, setSearchTimeout] = useState(null)

    const filterPrompts = (filterText) => {
        const regex = new RegExp(filterText, "i")
        // return clients.filter(p => (
        //     regex.test(p.name) || regex.test(p.surname) || regex.test(p.pin)
        // ));
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout)
        setSearchText(e.target.value)
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedClients(searchResult);
            }, 500)
        )
    }
    return (
        <div>
            <div className="flex">
                <div>
                    <div className="flex flex-col">
                        <form name="search" className="relative w-full flex-center">
                            <input
                                type="text"
                                placeholder="Найти пациента"
                                value={searchText}
                                onChange={handleSearchChange}
                                required
                                className="xl:w-[600px] py-[8px] pl-[26px] rounded-[20px] lg:w-[400px]"
                            />
                            <button className="bg-[#01B071] text-white py-[5px] px-[22px] rounded-[25px] ml-[11px]">ИСКАТЬ</button>
                        </form>
                    </div>
                    <div className="flex flex-col">
                        {/*Clients output*/}
                        {searchText ? (
                            <ClientCardList data={searchedClients} />
                        ) : (
                            <ClientCardList data={searchedClients} />
                        )}
                    </div>
                </div>
            <div>
                <RightBar />
            </div>
            </div>
        </div>
    );
};

export default AdminFeed;
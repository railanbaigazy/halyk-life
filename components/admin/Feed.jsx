import { useState } from "@node_modules/react";
import ClientCardList from "@components/admin/ClientCardList";

const AdminFeed = () => {
    const allClients = []
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
                {/*Clients output*/}
                {searchText ? (
                    <ClientCardList data={searchedClients} />
                ) : (
                    <ClientCardList data={searchedClients} />
                )}
            </div>
        </div>
    );
};

export default AdminFeed;
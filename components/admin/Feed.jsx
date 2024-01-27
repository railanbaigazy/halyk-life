const AdminFeed = () => {
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
                birdene2
            </div>
        </div>
    );
};

export default AdminFeed;
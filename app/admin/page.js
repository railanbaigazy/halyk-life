import AdminFeed from "@components/admin/Feed";
import MainWrapper from "@components/MainWrapper";

const AdminPage = () => {
    const allClients = []
    return (
        <MainWrapper>
            <AdminFeed allClients={ allClients }/>
        </MainWrapper>
    );
};

export default AdminPage;
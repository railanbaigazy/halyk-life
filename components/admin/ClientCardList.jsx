import ClientCard from './ClientCard/ClientCard';

const ClientCardList = () => {
    return (
        <div className='bg-white rounded-t-[10px] mt-[17px] min-h-screen max-w-[825px]'>
            <h1 className='text-[20px] pt-[36px] pl-[27px] font-500 mb-[21px]'>Список Клиентов</h1>
            <div>
                <ul className='flex gap-[153px] text-[#BBC4D3] justify-center border-b-2 border-[#D9DFED] pb-[14px]'>
                    <li>ИИН</li>
                    <li>ИМЯ</li>
                    <li>ПОЛ</li>
                </ul>
            </div>
            <ClientCard />
            <ClientCard />
        </div>
    );
};

export default ClientCardList;
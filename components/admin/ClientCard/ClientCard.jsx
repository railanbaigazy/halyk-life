const ClientCardList = () => {
    return (
        <>
            <div className="flex items-center justify-between py-[13px] border-b-2 border-[#D9DFED] hover:bg-[#0CC582] hover:bg-opacity-10">
                <div className="flex items-center">
                    <div className="w-[36px]
                                    h-[36px] 
                                    bg-[#EAEDF2] 
                                    flex 
                                    rounded-[50%] 
                                    items-center 
                                    justify-center 
                                    text-[18px] 
                                    font-bold 
                                    ml-[100px]">
                    КН</div>
                    <div className="ml-[150px]">031125501188</div>
                    <div className="ml-[90px]">Кайрат Нуртас</div>

                </div>
                <div className="flex relative">
                    <div className="mr-[250px]">Мужчина</div>
                </div>
            </div>
        </>
    );
};

export default ClientCardList;
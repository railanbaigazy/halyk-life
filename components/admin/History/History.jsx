const History = () => {
    return (
        <div className="ml-[20px] bg-white rounded-[10px] w-[321px] mb-[25px]">
            <div className="pl-[27px] pt-[19px]">
                <h1 className="">Сегодня, 12:01 AM</h1>
                <div className="flex items-center gap-[22px] mt-[9px] pb-[24px]">
                    <div className="w-[36px]
                                    h-[36px] 
                                    bg-[#EAEDF2] 
                                    flex 
                                    rounded-[50%] 
                                    items-center 
                                    justify-center 
                                    text-[18px] 
                                    font-bold ">
                    КН</div>
                    <h1 className="text-[14px]">Кайрат Нуртас</h1>
                    <div className="flex items-center bg-[#0CC582] bg-opacity-40 pl-[11px] py-[7px] rounded-[10px] pr-[10px] gap-[6px]">
                        <div className="h-[6px] w-[6px] bg-[#01B071] rounded-[50%]"></div>
                        <div className="text-[12px]">Принято</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
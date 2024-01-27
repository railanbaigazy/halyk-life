import MainWrapper from "@components/MainWrapper";

const ClientPage = () => {
    return (
        <div>
            <MainWrapper>
                <div className="bg-white pl-[40px] pt-[40px] rounded-[10px] pb-[100px] pr-[35px]">
                    <div className="flex xl:gap-[200px] lg:gap-[50px]">
                        <div>
                            <div className="w-[107px]
                                h-[107px] 
                                bg-[#EAEDF2] 
                                flex 
                                rounded-[50%] 
                                items-center 
                                justify-center 
                                text-[48px] 
                                font-bold 
                                ">
                            КН</div>
                            <h1 className="text-[48px] font-bold mt-[24px]">Кайрат Нуртас</h1>
                            <div className="text-[30px] font-bold mb-[45px] mt-[36px]">Детали клиента</div>
                            <div className="flex mb-[16px] gap-[140px]">
                                <div className="font-light">ИИН</div>
                                <div className="text-[#01B071]">123456712345</div>
                            </div>
                            <div className="flex gap-[50px]">
                                <div className="font-light">Дата рождения</div>
                                <div className="text-[#01B071]">25/11/2003</div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[24px] font-bold ml-[7px]">Анализы Клиента</h1>
                            <div className="flex gap-[27px] mb-[48px]">
                                <img src="/assets/images/blood.png" width={'264px'}/>
                                <img src="/assets/images/temperature.png" width={'264px'}/>
                            </div>
                            <div className="flex gap-[27px] mb-[43px]">
                                <img src="/assets/images/weight.png" width={'264px'}/>
                                <img src="/assets/images/glucose.png" width={'264px'}/>
                            </div>
                            <h1 className="text-[24px] font-bold ml-[7px] mb-[10px]">Прикрепленные Документы</h1>
                            <div className="mb-[50px]">
                                <img src="/assets/images/spravka.png" width={'419px'}/>
                            </div>
                            <h1 className="ml-[7px] text-[27px] font-bold">Подтверждение Выплаты По <br/>Страховому Полису</h1>
                            <div className="flex gap-[100px] mt-[50px]">
                                <button className="bg-[#FF6666] rounded-[15px] text-white py-[30px] px-[68px]">Отклонить</button>
                                <button className="bg-[#01B071] rounded-[15px] text-white py-[30px] px-[68px]">Принять</button>
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </div>
    );
};

export default ClientPage;
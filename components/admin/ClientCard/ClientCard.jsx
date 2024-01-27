import Link from 'next/link';

const ClientCardList = () => {
    return (
        <>
            <Link href="admin/client/pin">
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
                                        xl:ml-[50px] lg:ml-[15px]">
                        КН</div>
                        <div className="xl:ml-[65px] lg:ml-[50px] lg:text-[12px]">031125501188</div>
                        <div className="xl:ml-[115px] lg:ml-[70px] lg:text-[12px]">Кайрат Нуртас</div>

                    </div>
                    <div className="flex relative">
                        <div className="xl:mr-[130px] lg:mr-[85px] lg:text-[12px]">Мужчина</div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ClientCardList;
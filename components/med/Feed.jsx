import Link from "next/link";

const MedFeed = () => {
    const links = [
        {
            title: "Внести Данные Пациента",
            bgUrl: "/assets/images/med_1.png",
            navLink: "/med/upload-data",
        },{
            title: "Посмотреть Данные Пациента",
            bgUrl: "/assets/images/med_2.png",
            navLink: "/med/see-data",
        },{
            title: "Личный Кабинет",
            bgUrl: "/assets/images/med_3.png",
            navLink: "/med/account",
        },{
            title: "Документы и Справки",
            bgUrl: "/assets/images/med_4.png",
            navLink: "/med/documents",
        },
    ]
    return (
        <div className="grid grid-cols-2 gap-[40px] text-3xl">
            {links.map(link => (
                <Link href={link.navLink} className="w-[600px] h-72 rounded-[10px] relative overflow-hidden group duration-100 ease-in">
                    {/* Background image with reduced brightness */}
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-75 group-hover:brightness-50"
                        style={{
                            backgroundImage: `url(${link.bgUrl})`,
                        }}
                    ></div>

                    {/* Text content with original brightness */}
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white font-bold">
                        {link.title.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MedFeed;
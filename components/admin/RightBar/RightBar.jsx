import History from "../History/History";

const RightBar = () => {
    return (
        <div className='bg-[#E0E4EC] py-[20px] rounded-t-[10px] ml-[14px] min-h-screen pb-[445px]'>
            <div className="">
                <img className="w-[321px] px-[30px] mx-[20px] rounded-[10px] bg-white mb-[25px]" src="/assets/images/graph.png"/>
            </div>
            <h1 className="ml-[20px] text-[24px] font-500 mb-[17px]">История запросов</h1>
            <div>
                <History />
                <History />
            </div>
        </div>
    );
};

export default RightBar;
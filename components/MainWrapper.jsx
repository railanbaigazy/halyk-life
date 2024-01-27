const MainWrapper = ({ children }) => {
    return (
        <div className="min-h-screen pt-[40px] pl-[40px] max-w-[1440px] mx-auto">
            {children}
        </div>
    );
};

export default MainWrapper;
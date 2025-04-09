const ToggleBtn = ({ playerCount, activeTab, setActiveTab }) => {

    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
    };

       

    return (
        <div className='container mx-auto px-5 flex flex-col md:flex-row justify-between items-center mt-20 mb-10'>
            <h2 className='text-2xl font-bold'>{activeTab ==='selected'? `Selected Player (${playerCount}/6)`: 'Available Players'}</h2>
            <div className="inline-flex rounded-xl border border-gray-300 overflow-hidden">

                <button
                    type="button"
                    onClick={() => handleActiveTab("available")}
                    className={`px-6 py-3 text-sm font-semibold transition-colors ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#E7FE29] 
                        ${activeTab === "available" ? "bg-[#E7FE29] text-gray-600" : "bg-white text-black"} 
                        rounded-l-xl`}>
                    Available
                </button>

                <button
                    onClick={() => handleActiveTab("selected")}
                    className={`px-6 py-3 text-sm font-semibold transition-colors ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#E7FE29] 
                        ${activeTab === "selected" ? "bg-[#E7FE29] text-gray-600" : "bg-white text-black"} 
                        rounded-r-xl`}>
                    Selected ({playerCount})
                </button>

            </div>
        </div>
    );
};

export default ToggleBtn;

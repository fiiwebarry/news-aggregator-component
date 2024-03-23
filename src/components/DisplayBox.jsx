const DisplayBox = ({ fetchedData, isLoading, selectedApi }) => {
    return (
        <div className="">
            <div className="flex mx-auto justify-center">
                <p className="font-bold p-2">NEW FEEDS</p>
            </div>
            <div className="container mx-auto w-[990px] border rounded-md h-auto shadow-md">
                {isLoading ? (
                    <div><p>Loading...</p></div>
                ) : (
                    <div className="flex flex-wrap gap-[50px] justify-center p-3 mt-[10px]">
                        {selectedApi === "guardian" && fetchedData.length > 0 && (
                            <div className="flex flex-wrap justify-center">
                                {fetchedData.map((item, index) => (
                                    <div className="p-6 flex flex-wrap shadow-lg bg-slate-100 w-99 mx-4 my-4" key={index}>
                                        <div className="flex flex-col">
                                            <p className="mb-4">INFORMATION: {item.type}</p>
                                            <p className="mt-1">CATEGORY: {item.sectionName}</p>
                                            <p>HEADLINE: {item.webTitle}</p>
                                            <p>SOURCE: {item.webUrl}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedApi === "newhub" && fetchedData.length > 0 && (
                            <div className="flex flex-wrap justify-center">
                                {fetchedData.map((item, index) => (
                                    <div className="p-6 flex flex-wrap shadow-lg bg-slate-100 w-99 mx-4 my-4" key={index}>
                                        <div className="flex flex-col">
                                            {/* Render NewHub specific data */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedApi === "newyorktimes" && fetchedData.length > 0 && (
                            <div className="flex flex-wrap justify-center">
                                {fetchedData.map((item, index) => (
                                    <div className="p-6 flex flex-wrap shadow-lg bg-slate-100 w-99 mx-4 my-4" key={index}>
                                        <div className="flex flex-col">
                                            {/* Render New York Times specific data */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DisplayBox;

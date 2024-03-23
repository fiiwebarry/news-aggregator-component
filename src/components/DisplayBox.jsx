const DisplayBox = ({ fetchedData, isLoading }) => {
    return (
        <div className="">
            <div className="flex mx-auto justify-center">
                <p className="font-bold p-2">NEW FEEDS</p>
            </div>
            <div className="container mx-auto w-[990px] border rounded-md h-auto shadow-md">

                <div> {isLoading ? (
                    <div><p>Newshub</p></div>
                ) : (
                    <div className="flex flex-wrap gap-[50px] justify-center p-3 mt-[10px]">
                        {fetchedData && fetchedData.results ? (
                            fetchedData.results.map((item, index) => (
                                <div className="p-6 flex flex-wrap shadow-lg  bg-slate-100 w-[45%]" key={index}>
                                    {/* Render each item from The Guardian */}

                                    <p>Type: {item.type}</p>
                                    <p>Section ID: {item.sectionId}</p>
                                    <p>Section Name: {item.sectionName}</p>
                                    <p>Title: {item.webTitle}</p>
                                    <p>URL: {item.webUrl}</p>
                                </div>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                )} </div>

            </div>
        </div>
    );
}

export default DisplayBox;

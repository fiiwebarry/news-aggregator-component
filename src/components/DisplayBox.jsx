const DisplayBox = ({ fetchedData, isLoading, searchKeyword, searchCategory }) => {

    console.log(searchCategory);

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

                        {fetchedData.length > 0 ? (
                            <div className="flex flex-wrap justify-center">
                                {fetchedData.map((item, index) => (
                                    <div className="p-6 flex flex-wrap shadow-lg bg-slate-100 w-99 mx-4 my-4" key={index}>
                                        {/* Render each item from The Guardian */}
                                        <div className="flex flex-col">
                                            <p className="mb-4">INFORMATION: {item.type}</p>
                                            <p className="mt-1">CATEGORY: {item.sectionName}</p>

                                            <p>HEADLINE:{item.webTitle}  </p>
                                            <p>SOURCE: {item.webUrl}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
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
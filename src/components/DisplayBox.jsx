const DisplayBox = ({ fetchedData, isLoading, selectedApi }) => {
    
    return (
        <div className="">
            <div className="flex mx-auto justify-center">
                <p className="font-bold p-2">NEW FEEDS</p>
            </div>
            <div className="container mx-auto lg:w-[990px] border rounded-md h-auto shadow-md">
                {isLoading ? (
                    <div><p>Loading new Feeds...</p></div>
                ) : (
                    <div className="flex flex-wrap gap-[50px] justify-center p-3 mt-[10px]">

                        {selectedApi === "The Guardian" && fetchedData.length > 0 && (
                            <div className="flex flex-wrap justify-center">
                                {fetchedData.map((item, index) => {
                                    console.log(fetchedData);
                                    const { type, sectionName, webTitle, webUrl } = item;
                                    return (
                                        <div className="p-6 flex flex-wrap shadow-lg bg-slate-100 w-99 mx-4 my-4" key={index}>
                                            <div className="flex flex-col">
                                                <p className="mb-4">INFORMATION: {type}</p>
                                                <p className="mt-1">CATEGORY: {sectionName}</p>
                                                <p>HEADLINE: {webTitle}</p>
                                                <p>SOURCE: {webUrl}</p>
                                            </div>
                                        </div>
                                    )
                                }) }
                            </div>
                        )}

                       {selectedApi === "NewsHub" && fetchedData.articles.length > 0 && (
                            <div className="flex flex-wrap justify-center">
                                {fetchedData.articles.map((item, index) => (
                                
                                    <div className="p-6 flex flex-wrap shadow-lg bg-slate-100 w-99 mx-4 my-4" key={index}>
                                        <div className="flex flex-col">
                                            <p className="mb-4">Author: {item.author}</p>

                                            <p>HEADLINE: {item.title}</p>
                                            <p className="mt-1">DESCRIPTION: {item.description}</p>
                                            <p>SOURCE: {item.url}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedApi === "NewYorkTimes" && fetchedData.length > 0 && (
                            <div className="flex flex-wrap justify-center">
                                {fetchedData.map((item, index) => (
                                    <div className="p-6 flex flex-wrap shadow-lg bg-slate-100 w-99 mx-4 my-4" key={index}>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col">
                                                <p className="mb-4">Author: {item.author}</p>

                                                <p>HEADLINE: {item.title}</p>
                                                <p className="mt-1">DESCRIPTION: {item.description}</p>
                                                <p>SOURCE: {item.url}</p>
                                            </div>
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

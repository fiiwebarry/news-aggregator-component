

const DisplayBox = ({ fetchedData, isLoading, setIsLoading }) => {
    return (
        <div className="">



            <div className=" flex justify-center  mx-auto w-[990px] border rounded-md h-screen shadow-md">
                <div>
                    <p className="font-bold p-2">NEW FEEDS</p>
                </div>
                {isLoading ? (<div><p>Newshub</p></div>) : (<div>

                    {fetchedData.guardian && fetchedData.guardian.map((item, index) => (
                        <div key={index}>
                            {/* Render each item from The Guardian */}
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>)}



            </div>

        </div>
    )
}

export default DisplayBox

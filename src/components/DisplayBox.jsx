import { FETCH_STATUS, SELECTED_SOURCES } from "../../utils/index";
import icon from "../assets/images/broadcast.png";
import PropTypes from "prop-types";

const DisplayBox = ({
    fetchedData,
    fetchStatus,
    selectedApi,
    showImage,
    hasSubmitted,
}) => {
    return (
        <div className="">
            <div className="flex mx-auto justify-center">
                <p className="font-bold p-2">NEW FEEDS</p>
            </div>
            <div className="container mx-auto lg:w-[990px] w-full border rounded-md h-auto shadow-md">
                {showImage && (
                    <div className="flex flex-col p-2 mx-auto justify-center">
                        <p>
                            Click the <strong>Search</strong> button to get the latest results.
                        </p>
                        <img src={icon} alt="news" className="font-bold mt-[-90px]" />
                    </div>
                )}
                {fetchStatus === FETCH_STATUS.loading && (
                    <div>
                        <p>Loading new Feeds...</p>
                    </div>
                )}
                {hasSubmitted && (
                    <div className="flex flex-wrap gap-[50px] justify-center p-3 mt-[10px]">
                        {selectedApi === SELECTED_SOURCES.guardian &&
                            fetchedData?.length > 0 && (
                                <div className="flex flex-wrap justify-center">
                                    {fetchedData?.map((item, index) => {
                                        const { type, sectionName, webTitle, webUrl } = item;
                                        return (
                                            <div
                                                className="p-6 flex flex-wrap shadow-md bg-slate-100 lg:w-[900px] mx-4 my-4"
                                                key={index}
                                            >
                                                <div className="flex flex-col lg:w-[900px]  w-[300px]">
                                                    <p>
                                                        {" "}
                                                        <span className="font-bold">Headline:</span>{" "}
                                                        {webTitle}
                                                    </p>
                                                    <p className="mt-1">
                                                        <span className="font-semibold">Category</span>:{" "}
                                                        {sectionName}
                                                    </p>
                                                    <p className="">
                                                        <span className="font-semibold">
                                                            Information Type:
                                                        </span>{" "}
                                                        {type}
                                                    </p>
                                                    <p className="lg:text-[18px] text-[12px]">
                                                        {" "}
                                                        <span className="font-semibold">Source:</span>{" "}
                                                        {webUrl}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                        {selectedApi === SELECTED_SOURCES.newsHub &&
                            fetchedData?.length > 0 && (
                                <div className="flex flex-wrap justify-center">
                                    {fetchedData?.map((item, index) => (
                                        <div
                                            className="p-6 flex flex-wrap shadow-lg bg-slate-100 lg:w-[900px] mx-4 my-4"
                                            key={index}
                                        >
                                            <div className="flex flex-col">
                                                <p>HEADLINE: {item.title}</p>
                                                <p className="mt-1">DESCRIPTION: {item.snippet}</p>
                                                <p className="mb-4">Author: {item.author}</p>
                                                <p>SOURCE: {item.url}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        {selectedApi === SELECTED_SOURCES.newYorkTimes &&
                            fetchedData?.length > 0 && (
                                <div className="flex flex-wrap justify-center">
                                    {fetchedData?.map((item, index) => (
                                        <div
                                            className="p-6 flex flex-wrap shadow-lg bg-slate-100 lg:w-[900px]  md:w-[900px] w-full  mx-4 my-4"
                                            key={index}
                                        >
                                            <div className="flex flex-col lg:w-[900px]  w-[300px] ">
                                                <p className="">
                                                    <span className="font-bold">Headline:</span>{" "}
                                                    {item.headline.main}
                                                </p>

                                                <p className="mt-1">
                                                    {" "}
                                                    <span className="font-semibold">
                                                        Description:
                                                    </span>{" "}
                                                    {item.snippet}
                                                </p>
                                                <p className="">
                                                    <span className="font-semibold">Author:</span>{" "}
                                                    {item.byline.original}
                                                </p>
                                                <p>
                                                    <span className="font-semibold">
                                                        Information Type:
                                                    </span>{" "}
                                                    {item.document_type}
                                                </p>
                                                <p className="lg:text-[18px] text-[12px]">
                                                    <span className="font-semibold ]">Source:</span>{" "}
                                                    {item.web_url}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                )}
                {!hasSubmitted && fetchStatus === FETCH_STATUS.idle && (
                    <p>
                        Click the <strong>Search</strong> button to get the latest results.
                    </p>
                )}
            </div>
        </div>
    );
};

DisplayBox.propTypes = {
    fetchedData: PropTypes.array,
    fetchStatus: PropTypes.string,
    selectedApi: PropTypes.string,
    showImage: PropTypes.bool,
    hasSubmitted: PropTypes.bool,
};

export default DisplayBox;

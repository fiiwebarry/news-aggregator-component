import PropTypes from "prop-types";
import { FETCH_STATUS, SELECTED_SOURCES } from "../../utils";

const FormBuilder = ({
    selectedApi,
    setSelectedApi,
    searchKeyword,
    setSearchKeyword,
    searchCategory,
    setSearchCategory,
    searchDate,
    setSearchDate,
    handleSubmit,
    setHasSubmitted,
    setFetchStatus,
}) => {
    const resetSubmitState = () => {
        setFetchStatus(FETCH_STATUS.idle);
        setHasSubmitted(false);
    };
    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className=" lg:flex lg:flex-row flex flex-col justify-center mx-auto mt-[30px] mb-[20px] "
        >
            <div className="lg:flex lg:flex-row flex flex-col lg:gap-[60px] lg:mx-0 mx-auto">
                <select
                    className=" flex font-bold lg:mx-0 mx-auto w-[200px] h-[40px] border text-[gray] border-gray-300 p-2 rounded-md"
                    value={selectedApi}
                    onChange={(e) => {
                        const { value } = e.target;
                        resetSubmitState();
                        setSelectedApi(value);
                    }}
                >
                    <option value="">Source</option>
                    <option value={SELECTED_SOURCES.guardian}>The Guardian</option>
                    <option value={SELECTED_SOURCES.newsHub}>News Hub</option>
                    <option value={SELECTED_SOURCES.newYorkTimes}>New York Times</option>
                </select>
                <div className=" lg:flex  lg:flex-row md:flex md:flex-row flex flex-col lg:p-0  p-7 lg:mx-0 mx-auto gap-4">
                    <input
                        className="rounded-md w-[200px] font-bold  border border-gray-300 p-2 h-[40px]"
                        type="text"
                        placeholder="search Keyword"
                        autoComplete="off"
                        value={searchKeyword}
                        onChange={(e) => {
                            resetSubmitState();
                            setSearchKeyword(e.target.value);
                        }}
                        required={selectedApi === SELECTED_SOURCES.newsHub}
                    />
                    <input
                        className="rounded-md w-[200px]  font-bold border border-gray-300 p-2  h-[40px]"
                        type="text"
                        placeholder="Category"
                        autoComplete="off"
                        value={searchCategory}
                        onChange={(e) => {
                            resetSubmitState();
                            setSearchCategory(e.target.value);
                        }}
                        required={selectedApi === SELECTED_SOURCES.newsHub}
                    />
                    <input
                        className="rounded-md w-[200px] font-bold  border border-gray-300 p-2  h-[40px]"
                        type="date"
                        id="date"
                        name="date"
                        value={searchDate}
                        onChange={(e) => {
                            resetSubmitState();
                            setSearchDate(e.target.value);
                        }}
                    />
                </div>
            </div>

            <button
                className="lg:mx-0  font-bold mx-auto bg-[blue] p-2 lg:w-[100px] w-[200px] text-[white] rounded-md"
                type="submit"
            >
                Search
            </button>
        </form>
    );
};

FormBuilder.propTypes = {
    selectedApi: PropTypes.string.isRequired,
    setSelectedApi: PropTypes.func.isRequired,
    searchKeyword: PropTypes.string.isRequired,
    setSearchKeyword: PropTypes.func.isRequired,
    searchCategory: PropTypes.string.isRequired,
    setSearchCategory: PropTypes.func.isRequired,
    searchDate: PropTypes.number.isRequired,
    setSearchDate: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    setHasSubmitted: PropTypes.func.isRequired,
    setFetchStatus: PropTypes.func.isRequired,
};

export default FormBuilder;

import Header from "../components/Header";
import FormBuilder from "/src/components/FormBuilder";
import DisplayBox from "../components/DisplayBox";
import { useState } from "react";
import { FETCH_STATUS, SELECTED_SOURCES } from "../../utils/index";
import {
  fetchGuardianNews,
  fetchNewsHubNews,
  fetchNewYorkTimesNews,
} from "../axios/apiHandler";

const GlobalnewsHub = () => {
  const [selectedApi, setSelectedApi] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUS.idle);
  const [searchDate, setSearchDate] = useState(Date.now());
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!selectedApi) {
      // If no API is selected, don't perform the search
      return;
    }
    setFetchStatus(FETCH_STATUS.loading);
    try {
      let response;
      if (selectedApi === SELECTED_SOURCES.guardian) {
        const formattedDate = new Date(searchDate).toISOString().split("T")[0];
        response = await fetchGuardianNews({
          q: searchKeyword,
          section: searchCategory,
          usedate: formattedDate,
          "api-key": "583de15d-29de-4ff8-89a3-ef7e8f767693",
        });
      } else if (selectedApi === SELECTED_SOURCES.newsHub) {
        response = await fetchNewsHubNews({
          q: searchKeyword,
          from: searchDate,
          content: searchCategory,
          apiKey: "2e5472ecb66d48f89d693af0420c25ea",
        });
      } else if (selectedApi === SELECTED_SOURCES.newYorkTimes) {
        response = await fetchNewYorkTimesNews({
          q: searchKeyword,
          pub_date: searchDate,
          byline_person: searchCategory,
          "api-key": "1VudHApjkiEta3GZjMTGBOBmeAEmlJdv",
        });
      }
      setFetchedData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setFetchStatus(FETCH_STATUS.success);
      setHasSubmitted(true);
    }
  };

  return (
    <>
      <Header />
      <FormBuilder
        selectedApi={selectedApi}
        setSelectedApi={setSelectedApi}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchDate={searchDate}
        setSearchDate={setSearchDate}
        handleSubmit={handleFormSubmit}
        setHasSubmitted={setHasSubmitted}
        setFetchStatus={setFetchStatus}
      />

      <DisplayBox
        fetchedData={fetchedData}
        fetchStatus={fetchStatus}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchDate={searchDate}
        setSearchDate={setSearchDate}
        selectedApi={selectedApi}
        showImage={!fetchedData?.length && fetchStatus === FETCH_STATUS.idle}
        hasSubmitted={hasSubmitted}
      />
    </>
  );
};

export default GlobalnewsHub;


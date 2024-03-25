import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormBuilder from '/src/components/FormBuilder'
import DisplayBox from '../components/DisplayBox'
import { useState } from 'react'
import { guardianApi, newsApi, newyorktimesApi } from '../axios/axios'

const GlobalnewsHub = () => {

  const [selectedApi, setSelectedApi] = useState("NewYorkTimes");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchCategory, setSearchCategory] = useState("")
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [searchDate, setSearchDate] = useState(Date.now());
  const [showImage, setShowImage] = useState(true);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (selectedApi === "The Guardian") {
      // If no API is selected, don't perform the search
      return;
    }
    setIsLoading(true);
    try {
      let response;
      if (selectedApi === 'The Guardian') {

        response = await guardianApi.get("/search", {
          params: {
            q: searchKeyword,
            section: searchCategory,
            // usedate: formattedDate,
            'api-key': "583de15d-29de-4ff8-89a3-ef7e8f767693"
          }

        });
        setFetchedData(response.data.response.results)
        console.log(response.data.response.results);


      }
      else if (selectedApi === 'NewsHub') {
        const response = await newsApi.get("/v2/everything", {
          params: {
            q: searchKeyword,
            from: searchDate,
            fq: `author:("${searchCategory}")`,
            apiKey: "2e5472ecb66d48f89d693af0420c25ea"
          }
        });

        setFetchedData(response.data.articles)
        console.log(response.data.articles);
      }



      else if (selectedApi === 'NewYorkTimes') {
        console.log(searchDate);
        const response = await newyorktimesApi.get("/svc/search/v2/articlesearch.json", {
          params: {
            q: searchKeyword,
            pub_date: searchDate,
            fq: `news_desk:("${searchCategory}")`,
            'api-key': "1VudHApjkiEta3GZjMTGBOBmeAEmlJdv"
          }
        });

        setFetchedData(response?.data?.response?.docs)
        console.log(response.data.response.docs);
      }
      setSearchKeyword("");
      setSearchCategory("");
      setSearchDate(Date.now())
      setShowImage(false);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false)

    }

  };
  useEffect(() => {
    if (selectedApi !== "Source") {
      // If an API is selected, trigger the search
      handleFormSubmit({ preventDefault: () => { } });
    }
  }, [selectedApi]);

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
      />

      <DisplayBox
        fetchedData={fetchedData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchDate={searchDate}
        setSearchDate={setSearchDate}
        selectedApi={selectedApi}
        showImage={showImage}
        setShowImage={setShowImage} />


    </>
  )
}

export default GlobalnewsHub

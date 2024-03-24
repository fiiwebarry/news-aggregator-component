import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormBuilder from '/src/components/FormBuilder'
import DisplayBox from '../components/DisplayBox'
import { useState } from 'react'
import { guardianApi, newsApi, newyorktimesApi } from '../axios/axios'

const GlobalnewsHub = () => {

  const [selectedApi, setSelectedApi] = useState("The Guardian");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchCategory, setSearchCategory] = useState("")
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [searchDate, setSearchDate] = useState(Date.now());


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let response;
      if (selectedApi === 'The Guardian') {
        const formattedDate = new Date(searchDate).toISOString().split('T')[0];
        response = await guardianApi.get("/search", {
          params: {
            q: searchKeyword,
            section: searchCategory,
            usedate: formattedDate,
            'api-key': "583de15d-29de-4ff8-89a3-ef7e8f767693"
          }

        });
        setFetchedData(response.data.response.results)
        console.log(response.data.response.results);


      } else if (selectedApi === 'NewsHub') {
        const response = await newsApi.get("/v2/everything", {
          params: {
            q: searchKeyword,
            from: searchDate,
            sortBy: searchCategory,
            apiKey: "2e5472ecb66d48f89d693af0420c25ea"
          }
        });

        setFetchedData(response.articles)
        console.log(response.articles);
      }
      else if (selectedApi === 'NewYorkTimes') {
        const response = await newyorktimesApi.get("/svc/search/v2/articlesearch.json", {
          params: {
            q: searchKeyword,
            pub_date: searchDate,
            sort: searchCategory,
            apikey: "1VudHApjkiEta3GZjMTGBOBmeAEmlJdv"
          }
        });

        setFetchedData(response.data.response.docs)
      }


    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (searchCategory && searchKeyword && searchDate) {
      handleFormSubmit();
    }
  }, [selectedApi, searchKeyword, searchCategory, searchDate]);

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
        selectedApi={selectedApi} />
 </>
  )
}

export default GlobalnewsHub

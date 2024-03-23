import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormBuilder from '/src/components/FormBuilder'
import DisplayBox from '../components/DisplayBox'
import { useState } from 'react'
import { guardianApi, newsApi } from '../axios/axios'

const GlobalnewsHub = () => {

  const [selectedApi, setSelectedApi] = useState("The Guardian");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchCategory, setSearchCategory] = useState("")
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  const handleFormSubmit = async () => {
    setIsLoading(true);
    try {
      let response;
      if (selectedApi === 'The Guardian') {
        response = await guardianApi.get("/search", {
          params: {
            keyword: searchKeyword,
            category: searchCategory,
            'api-key': "583de15d-29de-4ff8-89a3-ef7e8f767693"
          }
        });
      } else if (selectedApi === 'NewsHub') {
        response = await newsApi.get("/v2/everything", {
          params: {
            keyword: searchKeyword,
            category: searchCategory,
            'api-key': "2e5472ecb66d48f89d693af0420c25ea"
          }
        });
      }
      else if (selectedApi === 'Newscred') {
        // Add logic to fetch data from Newscred API
      }

      setFetchedData(response.data.response.results);
      console.log(response.data.response.results)

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (selectedApi && searchKeyword && searchCategory) {
      handleFormSubmit();
    }
  }, [selectedApi, searchKeyword, searchCategory]);

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
        handleSubmit={handleFormSubmit}
      />

      <DisplayBox fetchedData={fetchedData} isLoading={isLoading} setIsLoading={setIsLoading} />

    </>
  )
}

export default GlobalnewsHub
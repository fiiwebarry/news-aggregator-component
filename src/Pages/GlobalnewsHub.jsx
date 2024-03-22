import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormBuilder from '/src/components/FormBuilder'
import DisplayBox from '../components/DisplayBox'
import { useState } from 'react'
import { guardianApi, newsApi } from '../axios/axios'

const GlobalnewsHub = () => {

  const [selectedApi, setSelectedApi] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchCategory, setSearchCategory] = useState("")
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const getSelectedApi = async () => {
      try {
        const guardianResponse = await guardianApi.get("/search?api-key=583de15d-29de-4ff8-89a3-ef7e8f767693", {
          params: {
            keyword: searchKeyword,
            category: searchCategory
          }
        });
        const newsApiResponse = await newsApi.get("/v2/everything?q=tesla&from=2024-03-20&sortBy=publishedAt&apiKey=2e5472ecb66d48f89d693af0420c25ea", {
          params: {
            keyword: searchKeyword,
            category: searchCategory
          }
        });



        setFetchedData({ guardian: guardianResponse.data.response.results, news: newsApiResponse.response.data.articles });
        console.log(setFetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSelectedApi();
  }, []);


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
      />

      <DisplayBox data={fetchedData} isLoading={isLoading} setIsLoading={setIsLoading} />

    </>
  )
}

export default GlobalnewsHub

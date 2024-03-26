import { removeUnusedParams } from "../../utils";
import { guardianApi, newsApi, newyorktimesApi } from "./axios";

export const fetchGuardianNews = async (params) => {
  try {
    const response = await guardianApi.get("/search", {
      params: removeUnusedParams(params),
    });
    return response.data.response.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchNewsHubNews = async (params) => {
  try {
    const response = await newsApi.get("/v2/everything", {
      params: removeUnusedParams(params),
    });

    return response.data.articles.slice(0, 10);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchNewYorkTimesNews = async (params) => {
  try {
    const response = await newyorktimesApi.get(
      "/svc/search/v2/articlesearch.json",
      {
        params: removeUnusedParams(params),
      }
    );
    return response?.data?.response?.docs;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

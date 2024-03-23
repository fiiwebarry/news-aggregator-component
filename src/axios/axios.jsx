import axios from "axios";

export const guardianApi = axios.create({
    baseURL: "https://content.guardianapis.com",
});

export const newsApi = axios.create({
    baseURL: "https://newsapi.org",
});

export const newyorktimesApi = axios.create({
    baseURL: "https://api.nytimes.com/"
})
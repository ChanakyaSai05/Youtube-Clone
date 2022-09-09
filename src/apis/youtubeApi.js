import axios from "axios";
const KEY = "AIzaSyALHeVJehPloRLLuVDVzUBOJpf-RLKS0lg";
export const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    chart: "mostPopular",
    maxResults: 50,
    regionCode: "IN",
  },
});
export const youtubeChannelApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
  },
});

import Axios from "axios";

const KEY = "AIzaSyAwctGhJTn0ae5WacMRtxAYmkO3HKEggdo";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ujzoc5p8qQsmdMBqLSbJMJWT-CkrDizZFhS5MAtKyLo",
  },
});

import axios from "axios";
import baseURL from "../configs/urls";

const key = process.env.REACT_APP_KEY || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2FmNzA5MTFkYzk5OWFjNGI0ZGNjNGIzZDRlZjc1NiIsInN1YiI6IjYxZmU2ZDlkNDgzMzNhMDA0MmEwMTY5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUlpvqQNn_QcuCj5_-hjwrT2k1eSLw5H03oaBPhNKuo';

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${key}`
    }
});

export {axiosService};
import axios from "axios";
import {BASE_URL_API} from "../config";

const customAxious = axios.create({
    baseURL: BASE_URL_API,
    headers: { "Access-Control-Allow-Origin": "*",}
});

export default customAxious
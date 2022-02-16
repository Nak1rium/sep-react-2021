import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const genresService = {
    getAllGenres:()=>axiosService.get(urls.genres).then(value => value.data)
}
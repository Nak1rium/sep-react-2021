import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    getAllFromEpisode: (page = 1) => axiosService.get(urls.episode + page).then(value => value.data)
}
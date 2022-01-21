import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getAlbumPhotosById:(id)=>axiosService.get(`${urls.album}/${id}${urls.photos}`).then(value => value.data)
}
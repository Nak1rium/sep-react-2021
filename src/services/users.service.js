import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const usersService = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data),
    getUserById:(id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserPostsById:(userId)=>axiosService.get(`${urls.users}/${userId}${urls.posts}`).then(value => value.data),
    getUserAlbumsById:(id)=>axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}
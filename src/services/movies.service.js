import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const moviesService = {
    getAll: (page) => axiosService.get(urls.movies , {
        params: {
            page
        }
    }).then(value => value.data),
    getMovieById: (id) => axiosService.get(urls.movie + id).then(value => value.data),
    getMoviesByParams: (filter, page, year, genre) => axiosService.get(
        urls.movies, {
            params: {
                sort_by: filter,
                page,
                primary_release_year: year,
                with_genres: genre
            }
        }).then(value => value.data),
    getMoviesBySearch:(page,query) => axiosService.get(urls.search, {
        params: {
            query,
            page
        }
    }).then(value => value.data)
}


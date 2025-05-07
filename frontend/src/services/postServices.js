import http from './httpServices'

export function postsApi(url) {
    return http.get(url).then(({ data }) => data);
}
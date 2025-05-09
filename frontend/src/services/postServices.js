import http from './httpServices'

export function postsApi(url) {
    return http.get(url).then(({ data }) => data);
}

export function createPostApi(data) {
    return http.post(`/posts/create`, data).then(({ data }) => data);
}

export function deletePostApi(id) {
    return http.delete(`/posts/${id}`).then(({ data }) => data);
}
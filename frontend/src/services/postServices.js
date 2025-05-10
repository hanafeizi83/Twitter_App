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

export function likePostApi(id) {
    return http.post(`/posts/like/${id}`).then(({ data }) => data);
}

export function commentPostApi({ id, data }) {
    return http.post(`/posts/comment/${id}`, data).then(({ data }) => data);
}
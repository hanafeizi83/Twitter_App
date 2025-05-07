import http from "./httpServices";

export function notificationApi() {
    return http.get('/notifications').then(({ data }) => data)
}
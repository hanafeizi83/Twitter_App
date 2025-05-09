import http from "./httpServices";

export function notificationApi() {
    return http.get('/notifications').then(({ data }) => data)
}

export function deleteNotificationApi() {
    return http.delete('/notifications').then(({ data }) => data)
}
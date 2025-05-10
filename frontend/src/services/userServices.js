import http from "./httpServices";

export function suggestedUsersApi() {
    return http.get('/users/suggested').then(({ data }) => data);
}

export function userProfileApi(username) {
    return http.get(`/users/profile/${username}`).then(({ data }) => data);
}

export function editUserProfileApi(data) {
    return http.post('/users/update', data).then(({ data }) => data);
}
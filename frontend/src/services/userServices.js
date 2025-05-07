import http from "./httpServices";
// /users/suggested
export function suggestedUsersApi() {
    return http.get('/users/suggested').then(({ data }) => data);
}
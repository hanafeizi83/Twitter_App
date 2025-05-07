import http from "./httpServices";

export function signupApi(data) {
    return http.post('/auth/signup', data).then(({ data }) => data);
}
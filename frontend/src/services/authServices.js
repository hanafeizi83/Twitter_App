import http from "./httpServices";

export function signupApi(data) {
    return http.post('/auth/signup', data).then(({ data }) => data);
}

export function loginApi(data) {
    return http.post('/auth/login', data).then(({ data }) => data);
}
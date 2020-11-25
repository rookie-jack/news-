import { http } from '../utils/http'

export function login(data) {
    return http({
        method: "post",
        url: "/Login",
        data: data,
    })
}

export function register(data) {
    return http({
        method: "post",
        url: "/register",
        data: data,
    })
}
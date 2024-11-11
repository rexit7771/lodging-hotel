import axios from "axios";

export const phase2Api = axios.create({
    baseURL: "https://h8-phase2-gc.vercel.app"
})
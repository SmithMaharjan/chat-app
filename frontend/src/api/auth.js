import axios from "axios"
import { baseUrl } from "../config/config.js"

export const signUp = async (data) => {
    try {
        const response = await axios({
            url: `${baseUrl}/signup`,
            method: "POST",
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"

            }
        })
        return response

    }
    catch (error) {
        console.log(error)
    }
}
export const login = async (data) => {
    console.log(data, "the actual data being sent");

    try {
        const response = await axios({
            url: `${baseUrl}/login`,
            method: "POST",
            data: data

        })
        return response

    }
    catch (error) {
        console.log(error)
    }
}
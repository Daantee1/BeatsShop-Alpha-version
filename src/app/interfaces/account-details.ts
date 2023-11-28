import { Music } from "./music"

export interface AccountDetails {
    login: string,
    email: string,
    password: string,
    songs?:{
     song?:  Music[]
    } 
}

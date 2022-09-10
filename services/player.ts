import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedGame(){
    const URL = 'players/landingpage'

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    try {
        const axiosResponse = response.data;
    
        return axiosResponse.data; 
    } catch (error) {
        console.log("Data tidak ditemukan");
    }
}
import axios, { AxiosInstance } from 'axios';

export class ConfigService {
    public returnPhotoAPI(): AxiosInstance {
        const api = axios.create({
            baseURL: process.env.IMAGE_API,
            headers: {
                Authorization: `Client-ID ${process.env.ACCESS_TOKEN}`,
                'accept-encoding': '*',
            },
        });

        return api;
    }
}

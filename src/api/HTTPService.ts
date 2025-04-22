import {Axios} from "axios";

interface HTTPService {
    get<T>(url: string, params?: Record<string, any>): Promise<T>;
    post<T>(url: string, data?: Record<string, any>): Promise<T>;
    put<T>(url: string, data?: Record<string, any>): Promise<T>;
    delete<T>(url: string): Promise<T>;
}

class AxiosHTTPService implements HTTPService {

    private axiosInstance: Axios;
    private readonly baseURL: string = 'https://pokeapi.co/api/v2/'

    constructor() {
        this.axiosInstance = new Axios({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    put<T>(url: string, data?: Record<string, any>): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete<T>(url: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<T> {
        console.log('HTTPService get', url);
        const response = await this.axiosInstance.get(url, {params});
        return JSON.parse(response.data);
    }

    async post<T>(url: string, data?: Record<string, any>): Promise<T> {
        const response = await this.axiosInstance.post(url, data);
        return response.data;
    }
}

export default new AxiosHTTPService();
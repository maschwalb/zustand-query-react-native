import HTTPService from "./HTTPService";

export const getRegions = async () => {
    const httpService = HTTPService;
    httpService.get()
}
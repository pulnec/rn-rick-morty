import { API } from "../axios/axios";
import { ENDPOINTS } from "../constants/constants";
import { ICharactersResponse } from "./services.props";

interface ICharactersParams {
    page?: number;
    name?: string | null;
}

export const Services = {
    characters: async (params?: ICharactersParams) => {
        return API.get<ICharactersResponse>(ENDPOINTS.character, { params })
    },
}
import {Forecast} from "./CurrentForecastModels";


export const createForecastFromResponse = (data: any): Forecast => {
    return {
        nO2Band: data?.nO2Band,
        o3Band: data?.o3Band,
        pM10Band: data?.pM10Band,
        forecastText: data?.forecastText,
    }
}
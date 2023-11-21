import {useEffect, useState} from "react";
import {Forecast} from "./CurrentForecastModels";
import {createForecastFromResponse} from "./CurrentForecastUtils";


export const useCurrentForecast = () => {
    const [data, setData] = useState<Forecast>();
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://api.tfl.gov.uk/AirQuality/");
            const data = await response.json();
            setData(createForecastFromResponse(data?.currentForecast[0]));
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    return {
        isLoading,
        data
    }
}
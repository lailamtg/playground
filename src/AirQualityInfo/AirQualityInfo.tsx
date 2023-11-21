import { Container, Stack, Typography } from '@mui/material';
import React from 'react'; import moment from 'moment';
import { AirQualityInfoProps } from './AirQualityInfoModels';

export const AirQualityInfo = ( {data}: AirQualityInfoProps) : JSX.Element => {
    const highlightDaysOfWeek = (str: string): JSX.Element => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const regex = new RegExp(daysOfWeek.join('|'), 'g');
        let highlightedStr = '<strong>Forecast: </strong>' + str.replace(regex, '<mark>$&</mark>');

        //there are annoying br tags I will remove them  :D
        highlightedStr = highlightedStr.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,' ');
        return <div dangerouslySetInnerHTML={{ __html: highlightedStr }} />;
    }

    return (
                <Stack spacing={3}>
                    <Typography><strong>NO2 Band:</strong> {data?.nO2Band}</Typography>
                    <Typography><strong>O3 Band:</strong> {data?.o3Band}</Typography>
                    <Typography><strong>PM10 Band:</strong> {data?.pM10Band}</Typography>
                    <Typography>{data? highlightDaysOfWeek(data?.forecastText): undefined}</Typography>
                </Stack>

    );
};

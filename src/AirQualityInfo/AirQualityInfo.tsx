import { Container, Stack, Typography } from '@mui/material';
import React from 'react'; import moment from 'moment';
import { AirQualityInfoProps } from './AirQualityInfoModels';
import styles from './stylesAirQualityInfo.module.css';
export const AirQualityInfo = ( {data}: AirQualityInfoProps) : JSX.Element => {


    function highlightDaysOfWeek(str: string): JSX.Element {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const regex = new RegExp(daysOfWeek.join('|'), 'g');
        const highlightedStr = '<strong>Forecast: </strong>' + str.replace(regex, '<mark>$&</mark>');
        return <div dangerouslySetInnerHTML={{ __html: highlightedStr }} />;
    }

    return (
        <Container maxWidth="sm">
            <Stack spacing={3}>
                <Typography variant="h4" component="h2">Air Quality Information</Typography>
                <Stack spacing={3}>
                    <Typography><strong>NO2 Band:</strong> {data?.nO2Band}</Typography>
                    <Typography><strong>O3 Band:</strong> {data?.o3Band}</Typography>
                    <Typography><strong>PM10 Band:</strong> {data?.pM10Band}</Typography>
                    <Typography>{data? highlightDaysOfWeek(data?.forecastText): undefined}</Typography>
                </Stack>
            </Stack>
        </Container>
    );
};

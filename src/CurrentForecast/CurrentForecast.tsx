import React from "react";
import { useCurrentForecast } from "./useCurrentForecast";
import {Container, Skeleton, Stack, Typography } from "@mui/material";
import { AirQualityInfo } from "../AirQualityInfo/AirQualityInfo";

export const CurrentForecast = (): JSX.Element => {
  const controller = useCurrentForecast();
  return (
      <Container maxWidth="sm">
          {   <Stack spacing={3}>
              <Typography variant="h4" component="h2">Air Quality Information</Typography>
              {controller.isLoading ?
                  <>
                      <Skeleton variant="text"/>
                      <Skeleton variant="text"/>
                      <Skeleton variant="text"/>
                      <Skeleton variant="text"/>
                      <Skeleton variant="text"/>
                  </>
                  : <AirQualityInfo data={controller.data!} />}
          </Stack>}
      </Container>
  );
};

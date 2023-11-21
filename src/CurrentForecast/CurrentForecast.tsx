import React from "react";
import { useCurrentForecast } from "./useCurrentForecast";
import { Skeleton, Typography } from "@mui/material";
import { AirQualityInfo } from "../AirQualityInfo/AirQualityInfo";

export const CurrentForecast = (): JSX.Element => {
  const controller = useCurrentForecast();
  
  return (
      <div>
        {controller.isLoading ?  <Skeleton variant="text" /> : <AirQualityInfo data={controller.data!} />}
      </div>
  );
};

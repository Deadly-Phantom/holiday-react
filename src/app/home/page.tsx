"use client";
import TopBar from "@/components/TopBar";
import FullWidthImage from "@/components/FullWidthImage";
import Footer from "@/components/Footer";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useStore } from "@/store";
import { tristanDarkTheme, tristanLightTheme } from "@/theme";
import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";

export default function Home() {
  const myTheme = useStore((state) => state.myTheme);
  const [temp, setTemp] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  useEffect(() => {
    const getWeather = async () => {
      const params = {
        latitude: 45.1667,
        longitude: 15.5,
        hourly: ["temperature_2m", "relative_humidity_2m"],
      };
      const url = "https://api.open-meteo.com/v1/forecast";
      const responses = await fetchWeatherApi(url, params);

      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];

      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();

      const hourly = response.hourly()!;

      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {
        hourly: {
          time: [
            ...Array(
              (Number(hourly.timeEnd()) - Number(hourly.time())) /
                hourly.interval()
            ),
          ].map(
            (_, i) =>
              new Date(
                (Number(hourly.time()) +
                  i * hourly.interval() +
                  utcOffsetSeconds) *
                  1000
              )
          ),
          temperature2m: hourly.variables(0)!.valuesArray()!,
          relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
        },
      };

      // `weatherData` now contains a simple structure with arrays for datetime and weather data
      for (let i = 0; i < weatherData.hourly.time.length; i++) {
        // console.log(
        //   weatherData.hourly.time[i].toISOString(),
        //   weatherData.hourly.temperature2m[i],
        //   weatherData.hourly.relativeHumidity2m[i]
        // );
        // check if is near current time
        if (
          Math.abs(
            weatherData.hourly.time[i].getTime() - new Date().getTime()
          ) < 3600000 // 1 hour in milliseconds
        ) {
          setTemp(weatherData.hourly.temperature2m[i]);
          setHumidity(weatherData.hourly.relativeHumidity2m[i]);
          break;
        }
      }
    };
    getWeather();
  }, []);

  return (
    <ThemeProvider
      theme={myTheme === "dark" ? tristanDarkTheme : tristanLightTheme}
      noSsr
    >
      <CssBaseline />
      <TopBar />
      <FullWidthImage />
      <Box
        sx={{
          textAlign: "center",
          margin: "20px 0",
          height: "100vh",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">CROATIA</Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          margin: "20px 0",
          height: "100vh",
          background: "grey",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography paddingTop={6} variant="h4">
          {temp !== null ? `Temperature: ${temp.toFixed(1)}°C` : "Loading..."}{" "}
          {humidity !== null ? `Humidity: ${humidity}%` : "Loading..."}
        </Typography>
        <Card
          sx={{
            //place card below the text
            position: "absolute",
            marginTop: 16,
            width: "35%",
            backgroundColor: "rgb(42, 111, 230)",
          }}
        >
          <CardHeader
            title="Croatia Info"
            subheader="Learn about its history, culture, and landscape"
          />
          <CardContent>
            <Typography variant="body1">
              Croatia is a country located in Southeast Europe, known for its
              stunning coastline along the Adriatic Sea, rich cultural heritage,
              and diverse landscapes. The country has a history that dates back
              to ancient times, with influences from the Roman Empire, Byzantine
              Empire, and Ottoman Empire. Croatia is famous for its medieval
              architecture, national parks like Plitvice Lakes and Krka, and
              vibrant cities such as Dubrovnik and Split. The culture is a blend
              of Mediterranean and Central European influences, reflected in its
              cuisine, music, and traditions. Croatia is also known for its
              beautiful islands, crystal-clear waters, and outdoor activities
              like hiking, sailing, and diving. The country has a rich tradition
              of arts and crafts, including lace-making and pottery. Croatia's
              diverse geography includes mountains, plains, and over a thousand
              islands, making it a popular destination for tourists seeking both
              relaxation and adventure.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Card>
        <CardHeader title="Croatia" subheader={+new Date()} />
        <CardContent></CardContent>
      </Card>
      <Footer />
    </ThemeProvider>
  );
}

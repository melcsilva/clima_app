import { getCoordinates, getWeather } from "../api/weatherApi.js";

export async function fetchCityWeather(city: string) {
  const { latitude, longitude } = await getCoordinates(city);
  const temperature = await getWeather(latitude, longitude);

  return {
    city,
    latitude,
    longitude,
    temperature,
  };
}

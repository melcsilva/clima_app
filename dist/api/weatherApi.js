import fetch from "node-fetch";
export async function getCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error("Erro ao buscar coordenadas");
    const data = await res.json(); // <-- cast para any
    if (!data.results || data.results.length === 0) {
        throw new Error("Cidade não encontrada");
    }
    const { latitude, longitude } = data.results[0];
    return { latitude, longitude };
}
export async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error("Erro ao buscar clima");
    const data = await res.json(); // <-- cast para any
    return data.current_weather.temperature;
}
//# sourceMappingURL=weatherApi.js.map
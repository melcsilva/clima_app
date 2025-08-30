import { fetchCityWeather } from "./services/weatherService.js";
async function main() {
    const city = process.argv[2]; // pega o argumento digitado
    if (!city) {
        console.log("Uso: ts-node src/app.ts <nome-da-cidade>");
        return;
    }
    try {
        const weather = await fetchCityWeather(city);
        console.log(`A temperatura atual em ${city} é ${weather.temperature}°C`);
    }
    catch (err) {
        console.error("Erro:", err.message);
    }
}
main();
//# sourceMappingURL=app.js.map
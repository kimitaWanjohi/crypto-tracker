import { BASE_URL, COUNTRY_URL, KEY, RAPID_API_KEY } from "../consts";

const getCountry = async () => {
  const response = await fetch(COUNTRY_URL, {
    method: "GET",
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
    },
  });
  const data = await response.json();
  return data;
};

const getCountryAirPollution = async () => {
  const countryData = await getCountry();
  const airPollutionData = await Promise.all(
    countryData.map(async (country) => {
      const response = await fetch(
        `${BASE_URL}/air_pollution?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${KEY}`
      );
      const data = await response.json();
      return data;
    })
  );
  return airPollutionData;
};

const mapCountryAirPollution = async () => {
  const countryData = await getCountry();
  const airPollutionData = await getCountryAirPollution();
  const mappedData = countryData.map((country, index) => ({
    name: country.name,
    latlng: country.latlng,
    airPollution: airPollutionData[index]
  }));
  return mappedData;
};

export default mapCountryAirPollution;

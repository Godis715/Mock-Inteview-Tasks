import cities from "./cities";

export default async function fetchCities(query) {
  if (!query) {
    return [];
  }

  return cities.filter((city) =>
    city.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
}

import { useMemo, useState } from "react";
import fetchCities from "./fetchCities";
import debounce from "./debounce";

export default function App() {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCitiesDebounced = useMemo(
    () =>
      debounce(
        (q) =>
          fetchCities(q)
            .then(setCities)
            .then(() => setIsLoading(false)),
        500
      ),
    [setCities]
  );

  const handleQueryChange = (ev) => {
    setQuery(ev.target.value);
    setCities([]);

    if (!ev.target.value) {
      return;
    }

    setIsLoading(true);
    fetchCitiesDebounced(ev.target.value);
  };

  const renderDropdown = () => {
    if (isLoading) {
      return <div>...</div>;
    }

    if (cities.length) {
      return cities.map((city) => <div key={city}>{city}</div>);
    }

    if (query) {
      return <div>Ничего не найдено</div>;
    }

    return <div>Начните вводить название города</div>;
  };

  return (
    <div>
      <h2>#3 Поиск города</h2>
      <input
        value={query}
        onChange={handleQueryChange}
        placeholder="Aurorium"
      />
      <div>{renderDropdown()}</div>
    </div>
  );
}

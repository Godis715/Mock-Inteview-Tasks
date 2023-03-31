import { useEffect, useState } from 'react';

export default function CatFact() {
  // TODO: сделать так, чтоб по клику на кнопку загружался случайный
  // факт о котах:
  // https://catfact.ninja/fact
  // Реализовать получение данных в виде хука:
  // const { fact, refreshFact, isLoading } = useRandomFact();

  const [fact, setFact] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchNewFact = () => {
    setIsLoading(true);

    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact))
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchNewFact, []);

  return (
    <div>
      <h2>#2 Случайные факты о котиках</h2>
      <button onClick={fetchNewFact}>Случайный факт</button>
      <div>{isLoading ? 'Загрузка...' : fact}</div>
    </div>
  );
}

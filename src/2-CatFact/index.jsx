export default function CatFact() {
  // TODO: сделать так, чтоб по клику на кнопку загружался случайный
  // факт о котах:
  // https://catfact.ninja/fact
  // Реализовать получение данных в виде хука:
  // const { fact, refreshFact, isLoading } = useRandomFact();
  return (
    <div>
      <h2>#2 Случайные факты о котиках</h2>
      <button>Случайный факт</button>
      <div>{/** Здесь надо отрендерить факт */}</div>
    </div>
  );
}

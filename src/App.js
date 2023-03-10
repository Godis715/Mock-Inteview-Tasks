import UrlCleanup from "./1-UrlCleanup";
import CatFact from "./2-CatFact";
import TaskDebounce from "./3-TaskDebounce";
import ButtonTask from "./4-ButtonTask";
import "./styles.css";

export default function App() {
  return (
    <div>
      <UrlCleanup />
      <hr />
      <CatFact />
      <hr />
      <TaskDebounce />
      <hr />
      <ButtonTask />
    </div>
  );
}

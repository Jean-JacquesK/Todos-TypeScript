import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { ResponseData } from "./interfaces/ResponseData";
import { FetchApi } from "./utils/FetchApi";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [todosData, setTodosData] = useState<ResponseData[]>([]);

  useEffect(() => {
    FetchApi().then((response) => {
      setTodosData(response);
      setIsLoading(false);
      console.log("Response", response);
    });
  }, []);

  console.log("ICI", todosData);

  return (
    <div className='App'>
      <ul>
        {isLoading
          ? "Chargement.."
          : todosData.map((todo: ResponseData) => {
              <li key={todo.id}>
                <Todo todo={todo} />
              </li>;
            })}
      </ul>
    </div>
  );
}

export default App;

// {
//   completed: false,
//   title: "",
//   userId: 0,
// }

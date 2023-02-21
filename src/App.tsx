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
    });
  }, []);

  return (
    <div className='App'>
      <h1>Liste des chose a faire : </h1>
      <ul className='list-group '>
        {isLoading ? (
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          todosData.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })
        )}
      </ul>
    </div>
  );
}

export default App;

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

  return (
    <div className='App'>
      <ul>
        {isLoading ? (
          <p>Chargement..</p>
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

import { FetchApi } from "../../utils/FetchApi";

function ChildJJ({
  name,
  age,
  onSubmit,
}: {
  name: string;
  age: number;
  onSubmit: (name: string) => string;
}) {
  return (
    <div>
      <button
        onClick={() => {
          FetchApi();
        }}
      >
        Click
      </button>
    </div>
  );
}
export default ChildJJ;

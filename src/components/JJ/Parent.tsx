import ChildJJ from "./Child";

function Parent() {
  const onSubmit = (name: string) => {
    return name;
  };

  return <ChildJJ name='JJ' age={30} onSubmit={onSubmit} />;
}
export default Parent;

// fetch json placeholder !!

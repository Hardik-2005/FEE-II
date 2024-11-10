import Student from "./Components/Student";
function App() {
  return (
    <>
      <Student name="Harry Potter" Author ={"20"} isStudent={true}></Student>
      <Student name="J.K.Rowling" Author ="23" isStudent={false}></Student>
      <Student name="Nishtha" Author ={18} isStudent={true}></Student>
      <Student></Student>
    </>
  );
}
export default App;



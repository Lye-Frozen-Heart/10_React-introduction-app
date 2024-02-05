import { Content } from "./Content.jsx";
import { Header } from "./Header.jsx";
import { Total } from "./Total.jsx";
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const partFirstData = { part1, exercises1 };
  const partSecondData = { part2, exercises2 };
  const partThirdData = { part3, exercises3 };
  const numbers = { exercises1, exercises2, exercises3 };
  return (
    <div>
      <Header course={course}></Header>
      <Content
        partFirstProps={partFirstData}
        partSecondProps={partSecondData}
        partThirdProps={partThirdData}
      ></Content>
      <Total numbers={numbers}></Total>
    </div>
  );
};

export default App;

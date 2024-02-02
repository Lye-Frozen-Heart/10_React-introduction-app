import { Part } from "./Part.jsx";

export const Content = ({ part1Object, part2Object, part3Object }) => {
  return (
    <>
      <Part part={part1Object.part1} exercise={part1Object.exercise1}></Part>
      <Part part={part2Object.part2} exercise={part2Object.exercise2}></Part>
      <Part part={part3Object.part3} exercise={part3Object.exercise3}></Part>
    </>
  );
};

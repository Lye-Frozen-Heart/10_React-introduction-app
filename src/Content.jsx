import { Part } from "./Part.jsx";

export const Content = ({
  partFirstProps,
  partSecondProps,
  partThirdProps,
}) => {
  return (
    <>
      <Part
        part={partFirstProps.part1}
        exercise={partFirstProps.exercise1}
      ></Part>
      <Part
        part={partSecondProps.part2}
        exercise={partSecondProps.exercise2}
      ></Part>
      <Part
        part={partThirdProps.part3}
        exercise={partThirdProps.exercise3}
      ></Part>
    </>
  );
};

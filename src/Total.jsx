export const Total = ({ numbers }) => {
  return (
    <p>
      {`Number of exercises: ${
        numbers.exercises1 + numbers.exercises2 + numbers.exercises3
      }`}
    </p>
  );
};

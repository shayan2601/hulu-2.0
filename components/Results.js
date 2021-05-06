import Thuumbnail from "./Thuumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex-wrap justify-center">
      {results.map((result) => (
        <Thuumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
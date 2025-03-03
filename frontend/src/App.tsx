import "./App.css";
import data from "./CollegeBasketballTeams.json";

function School({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

function App() {
  return (
    <>
      {data.teams.map((singleschool) => (
        <School {...singleschool} />
      ))}
    </>
  );
}

export default App;

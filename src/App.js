import "./App.css";
import Router from "./Router";

function App({ logout, login }) {
  return (
    <div>
      <Router logout={logout} login={login} />
    </div>
  );
}

export default App;

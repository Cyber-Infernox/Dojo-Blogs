// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: "Yoshi", age: 30 };
  const go = "http://www.google.com";

  // A comment

  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"Hello Ninja's"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={go}>Google Site</a>
      </div>
    </div>
  );
}

export default App;

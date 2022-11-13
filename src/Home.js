import { useState } from "react";

const Home = () => {
  // let name = "Mario";
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(45);

  const handleClick = () => {
    // name = "Luigi";
    setName("Luigi");
    setAge(50);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

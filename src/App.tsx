import { useState } from "react";
import "/src/main.css";

export default function App() {
  const [darkMode,setDarkMode]=useState(true);
  function handleToggle() {
    setDarkMode((prevState) => !prevState);
  }
  return <Card togglerOn={darkMode} handleToggle={handleToggle} darkMode={darkMode}/>;
}


function Logo() {
  return (
    <span className="logo">
      <svg className="logo__icon">
        <use href="/src/assets/icons/react.svg#react"></use>
      </svg>
      <span className="logo__name">React Facts</span>
    </span>
  );
}

function Card(props) {
  return (
    <div className="card">
      <CardHeader {...props} />
      <CardBody {...props}/>
    </div>
  );
}

function CardHeader(props) {
  return (
    <div className={"card__header "+(props.darkMode&&"dark")}>
      <Logo />
      <div className={"toggle-container "+(props.darkMode&&"dark")}>
        <span className="label-light">Light</span>
        <ToggleSwitch {...props}/>
        <span className="label-dark">Dark</span>
      </div>
    </div>
  );
}

function CardBody(props) {
  return (
    <div className={"card__body "+(props.darkMode && "dark")}>
      <h2 className="body-title">Fun facts about React</h2>
      <svg className="body-bg">
        <use href="/src/assets/icons/react-bg.svg#react-bg"></use>
      </svg>
      <List />
    </div>
  );
}

function ToggleSwitch(props) {
  console.log(props);
  
  let togglerClassName = "";
  togglerClassName = props.togglerOn ? "toggle-switch left" : "toggle-switch right";

  return (
    <label htmlFor="toggler" className={"toggle-btn "+(props.darkMode&&"dark")}>
      <span className={togglerClassName}></span>
      <input
        type="checkbox"
        name="toggler"
        id="toggler"
        onChange={props.handleToggle}
        defaultChecked={true}
      />
    </label>
  );
}

function List() {
  return (
    <ul className="list">
      <li className="list-item">Was first released in 2013</li>
      <li className="list-item">Was originally created by Jordan Walke</li>
      <li className="list-item">Has well over 100K stars on GitHub</li>
      <li className="list-item">Is maintained by Facebook</li>
      <li className="list-item">
        Powers thousands of enterprise apps, including mobile apps
      </li>
    </ul>
  );
}

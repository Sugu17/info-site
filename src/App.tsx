import "/src/main.css";

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

function CardHeader() {
  return (
    <div className="card__header">
      <Logo />
      <span className="header__desc">React Course - Project 1</span>
    </div>
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

function CardBody(){
    return (
        <div className="card__body">
            <h2 className="body-title">Fun facts about React</h2>
            <svg className="body-bg"><use href="/src/assets/icons/react-bg.svg#react-bg"></use></svg>
            <List/>
        </div>
    )
}

function Card(){
    return (
        <div className="card">
            <CardHeader/>
            <CardBody/>
        </div>
    )
}

export default function App() {
  return <Card/>;
}

import logo from '../images/dove.png'
import Nav from "./navigation_menu";

export default function Header() {
    return (
      <header>
        <h1>Birdwatching</h1>
        <img src={logo} alt="a simple dove logo"/>
        <Nav />
      </header>
    );
  }
import "../styles/Header.css";
import Logo from "../assets/main-logo.svg";

function Header() {
  return (
    <header>
      <p>
        Free Delivery on all <span>orders over $25</span>
      </p>
      <div>
        <img src={Logo} alt="logo" />
        <center>
          <button>Become a Chef</button> <button>Login</button>
        </center>
      </div>
    </header>
  );
}

export default Header;

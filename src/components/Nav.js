import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <FontAwesomeIcon size="2x" icon={faBars} />
      </button>
    </nav>
  );
};

export default Nav;

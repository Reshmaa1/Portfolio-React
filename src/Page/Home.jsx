//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
const Home = () => {
  return (
    <div className="radient">
      <div>
        <h1>Portfolio</h1>
    <h2>HIRE ME!!!</h2>
    </div>
<div className="container">
  <div className="row">
    <div className="col"><NavLink to="">Home</NavLink></div>
    <div className="col"><NavLink to="">About Me</NavLink></div>
    <div className="col"><NavLink to="">Projects</NavLink></div>
    <div className="col"><NavLink to="">Blog</NavLink></div>
    <div className="col"><NavLink to="">Contact</NavLink></div>
  </div><br/><br/>
<div className="container">
  <div className="row">
    <div className="col">
<h1 className="white">Hi I'm RESHMA AKKALI</h1><br/><br/>
<h2>UI Developer</h2>
<br/><br/>
<button>Hire Me</button>
    </div>
    <div className="col">
    <p className="red"> Expert on</p> <h2 className="white">Based In United States and I'm developer and UI/UX Designer.</h2>
      <p>Hey are you looking for designer to build your brand and grow your business? Let's shake hands with me </p>
    <NavLink to ="/">DOWNLOAD CV</NavLink>
    </div>
  </div>
</div>
</div>  
    </div>
  );
};

export default Home;

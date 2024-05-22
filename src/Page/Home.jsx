import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div><h1>Check</h1>
      <ul>
        <li><Link to ="/">Home</Link></li>
      

        <li><Link to ="/AboutUs">About Us</Link></li>
        <li><Link to ="/ContactMe">Home</Link>Contact Me</li>
        <li><Link to ="/MyWork">Home</Link>My Work</li>
      </ul>


    </div>
  );
};

export default Home;

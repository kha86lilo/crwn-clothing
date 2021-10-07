import "./homepage.styles.scss";
import Directory from "../../Components/directory/directory.component";
const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory></Directory>
    </div>
  );
};

export default HomePage;

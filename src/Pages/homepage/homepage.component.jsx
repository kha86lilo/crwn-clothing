import "./homepage.styles.scss";
import Directory from "../../Components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";
const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Welcome to my Homepage</h1>
      <Directory></Directory>
    </HomePageContainer>
  );
};

export default HomePage;

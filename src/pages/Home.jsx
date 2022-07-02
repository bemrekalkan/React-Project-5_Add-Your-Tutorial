import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    await axios.get(url);
  };

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;

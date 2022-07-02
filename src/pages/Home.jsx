import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  //! GET (Read) 👇
  //? Fetching data from API with try-catch 👇
  const getTutorials = async () => {
    try {
      //! Destructring 👇:
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! Only makes requests when component mount happens
  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  //! POST (Create)
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    //! After sending the data to the API with submit, we are calling the data from the API again. So final datas will appear on the page without refreshing  👇
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;

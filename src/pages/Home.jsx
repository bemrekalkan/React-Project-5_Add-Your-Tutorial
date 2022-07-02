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
    //! After sending the data to the API with submit, we are calling the data from the API again with getTutorials() function. So final datas will appear on the page without refreshing  👇
    getTutorials();
  };

  //! DELETE 👇
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  //! UPDATE (PUT: Whole Update, PATCH : Partially Update)
  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: desc }));

    try {
      await axios.put(`${url}/${id}`, filtered[0]);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;

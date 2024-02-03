import { Icon } from "@iconify/react";
import "./App.css";
import EntryContainer from "./components/EntryContainer";
import React, { useEffect, useState } from "react";
import BasicForm from "./components/BasicForm";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Entry from "./components/Entry";

function App() {
  const currentDate: Date = new Date(); // Current data and time
  let entries = 2;

  const [responseMessage, setResponseMessage] = useState();

  const [testData, setTestData] = useState([
    {
      _id: "65bd5d8db0405eaf75145407",
      type: "aasdasda",
      title: "asdasdadd",
      content: "dsdsdsdsdsdsd",
      date: "Fri Feb 02 2024 15:24:24 GMT-0600 (Central Standard Time)",
    },
    {
      _id: "65bd5d8db0405eaf75145407",
      type: "aasdasda",
      title: "asdasdadd",
      content: "dsdsdsdsdsdsd",
      date: "Fri Feb 02 2024 15:24:24 GMT-0600 (Central Standard Time)",
    },
  ]);

  const getDataFromLambda = () => {
    const url = "https://nmega69f5e.execute-api.us-east-1.amazonaws.com/dev";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((responseData) => {
        setResponseMessage(responseData.body);
      })
      .catch((error) => {
        setResponseMessage(error.message);
      });
  };

  // Call function on mount
  useEffect(() => {
    getDataFromLambda();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/entry" element={<Entry />}></Route>
    </Routes>
  );
}

export default App;

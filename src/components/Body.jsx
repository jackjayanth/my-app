import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
function Body() {
  const dataPile = [
    {
      question: "What are three things I was grateful for today?",
      heading: "Gratitude",
      answer: "",
    },
    {
      question: "What brought me joy or happiness today?",
      heading: "Joy",
      answer: "",
    },
    {
      question: "Who made a positive impact on me today and how?",
      heading: "Person",
      answer: "",
    },
    {
      question: "What achievements or successes did I celebrate today?",
      heading: "Celebrate",
      answer: "",
    },
    {
      question: "What small pleasures did I enjoy today?",
      heading: "Pleasure",
      answer: "",
    },
    {
      question: "What aspects of my health am I grateful for?",
      heading: "Health",
      answer: "",
    },
    {
      question:
        "What activities or practices contributed to my well-being today?",
      heading: "Hobbies",
      answer: "",
    },
    {
      question: "What opportunities or privileges am I grateful for?",
      heading: "Privileges",
      answer: "",
    },
    {
      question: "What lessons or insights did I gain today?",
      heading: "Lessons",
      answer: "",
    },
    {
      question:
        "What goals or aspirations am I grateful to be working towards?",
      heading: "Goals",
      answer: "",
    },
    {
      question:
        "What patterns or themes do I notice in my gratitude journal entries?",
      heading: "Themes",
      answer: "",
    },
  ];
  const [data, setData] = useState([dataPile]);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    setData(dataPile);
  }, []);

  const handleInputChange = (value) => {
    setInputData(value); // Update the state with the input data from the child component
    // console.log(value, "parent");
  };
  return (
    <>
      {data.map((question, index) => (
        <Card
          key={index}
          heading={question.heading}
          question={question.question}
          answer={handleInputChange}
        />
      ))}
    </>
  );
}

export default Body;

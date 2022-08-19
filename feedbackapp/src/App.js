import "./index.css";
import "./App.css";
import uuid from "react-uuid";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/Feedbackdata.jsx";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import { useState } from "react";

function App() {
  const [data, setdata] = useState(FeedbackData);

  const deleteFeedbackData = (id) => {
    if (window.confirm("Are you sure, You want to delete ?")) {
      setdata(data.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setdata([newFeedback, ...data]);
  };
  return (
    <>
      <Header text="Feedback Application" bgColor="lightgray" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedBackStats data={data} />
        <FeedbackList
          feedbackdata={data}
          deleteFeedbackData={deleteFeedbackData}
        />
      </div>
    </>
  );
}

export default App;

import { createContext, useState } from "react";
import uuid from "react-uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedbackdata, setFeedbackdata] = useState([
    {
      id: 1,
      text: "this is the first item",
      rating: 8,
    },
    {
      id: 2,
      text: "this is the second item",
      rating: 5,
    },
    {
      id: 3,
      text: "this is the third item",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedbackdata([newFeedback, ...feedbackdata]);
  };
  const deleteFeedbackData = (id) => {
    if (window.confirm("Are you sure, You want to delete ?")) {
      setFeedbackdata(feedbackdata.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (id, updateItem) => {
    setFeedbackdata(
      feedbackdata.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackdata,
        deleteFeedbackData,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

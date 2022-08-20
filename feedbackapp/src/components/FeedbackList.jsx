import React from "react";
import FeedbackItem from "./FeedbackItem";

import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";

export default function FeedbackList() {
  const { feedbackdata } = useContext(FeedbackContext);
  if (!feedbackdata || feedbackdata.length === 0) {
    return "No Feedback data is available to show";
  }
  return (
    <>
      <div className="feedback-list">
        {feedbackdata.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

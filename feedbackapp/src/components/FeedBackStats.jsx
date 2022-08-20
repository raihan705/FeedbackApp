import React from "react";
import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";

export default function FeedBackStats() {
  const { feedbackdata } = useContext(FeedbackContext);
  let average =
    feedbackdata.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedbackdata.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedbackdata.length} Reviews</h4>
      <h4>Average rating is : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

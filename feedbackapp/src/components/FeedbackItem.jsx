import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./Shared/Card";

import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";

export default function FeedbackItem({ item }) {
  const { deleteFeedbackData, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        type="button"
        className="close"
        onClick={() => deleteFeedbackData(item.id)}
      >
        <FaTimes color="red" />
      </button>
      <button className="edit" type="button" onClick={() => editFeedback(item)}>
        <FaEdit color="darkblue" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

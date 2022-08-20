import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./Shared/Card";

import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";

export default function FeedbackItem({ item }) {
  const { deleteFeedbackData } = useContext(FeedbackContext);
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
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

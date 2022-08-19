import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./Shared/Card";
import PropTypes from "prop-types";

export default function FeedbackItem({ item, deleteFeedbackData }) {
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

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

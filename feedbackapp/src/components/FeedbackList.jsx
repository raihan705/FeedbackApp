import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

export default function FeedbackList({ feedbackdata, deleteFeedbackData }) {
  if (!feedbackdata || feedbackdata.length === 0) {
    return "No Feedback data is available to show";
  }
  return (
    <>
      <div className="feedback-list">
        {feedbackdata.map((item) => (
          <FeedbackItem
            key={item.id}
            item={item}
            deleteFeedbackData={deleteFeedbackData}
          />
        ))}
      </div>
    </>
  );
}

FeedbackList.propTypes = {
  feedbackdata: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

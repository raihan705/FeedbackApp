import React from "react";
import Proptypes from "prop-types";

export default function FeedBackStats({ data }) {
  let average =
    data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / data.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{data.length} Reviews</h4>
      <h4>Average rating is : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedBackStats.propTypes = {
  data: Proptypes.array.isRequired,
};

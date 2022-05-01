import React from "react";
import ReactTimeAgo from "react-time-ago";
import { format } from "date-fns";

function LastSeen({ date }) {
  return <ReactTimeAgo date={date} locale="en-US" />;
}

export default function DateUtil(data) {
  const nano = data / 1000000;

  const oneday = new Date() - 60 * 60 * 24 * 1000;
  const oneData = new Date(oneday);

  if (new Date(nano).toISOString() < oneData.toISOString()) {
    return format(new Date(nano), "dd MMM yyyy");
  } else {
    return <LastSeen date={nano} />;
  }
}

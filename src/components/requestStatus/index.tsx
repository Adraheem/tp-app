import React, {useMemo} from 'react';
import {RequestStatus} from "../../types";

interface IProps {
  status: RequestStatus
}

function RequestStatusComponent({status}: IProps) {
  const {div, text} = useMemo(() => {
    switch (status) {
      case "PENDING":
        return {
          div: "border-slate-500 bg-slate-50",
          text: "text-slate-500"
        };

      case "APPROVED":
        return {
          div: "border-orange-500 bg-orange-50",
          text: "text-orange-700"
        };

      case "EXECUTED":
        return {
          div: "border-green-500 bg-green-50",
          text: "text-green-700"
        };
    }
  }, [status]);

  return (
    <div className={`inline-block border px-2 py-1 ${div}`}>
      <p className={`leading-none typo-small ${text}`}>{status}</p>
    </div>
  );
}

export function getRequestStatusStyles(status: RequestStatus): { div: string, text: string } {
  switch (status) {
    case "PENDING":
      return {
        div: "border-slate-500 bg-slate-500",
        text: "text-white"
      };

    case "APPROVED":
      return {
        div: "border-orange-500 bg-orange-500",
        text: "text-white"
      };

    case "EXECUTED":
      return {
        div: "border-green-500 bg-green-500",
        text: "text-white"
      };
  }
}

export default RequestStatusComponent;

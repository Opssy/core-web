import React, { Fragment, useEffect, useState } from "react";

const TypeOfProfileText = ({ formType }) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (formType === "jobseeker") {
      setText("Jobseeker");
      setImg(
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99826 0C11.4538 0 13.4427 1.98889 13.4427 4.44444C13.4427 6.9 11.4538 8.88889 8.99826 8.88889C6.54271 8.88889 4.55382 6.9 4.55382 4.44444C4.55382 1.98889 6.54271 0 8.99826 0ZM13.4427 11.7111C13.4427 12.8889 13.1316 15.6333 11.0094 18.7L10.1094 13.3333L11.1538 11.2444C10.4649 11.1667 9.74271 11.1111 8.99826 11.1111C8.25382 11.1111 7.5316 11.1667 6.84271 11.2444L7.88715 13.3333L6.98715 18.7C4.86493 15.6333 4.55382 12.8889 4.55382 11.7111C1.89826 12.4889 0.109375 13.8889 0.109375 15.5556V20H17.8872V15.5556C17.8872 13.8889 16.1094 12.4889 13.4427 11.7111Z"
            fill="#4895EF"
          />
        </svg>
      );
    } else if (formType === "freelancer") {
      setText("Freelancer");
      setImg(
        <svg
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.25 17.5H1.75C1.41848 17.5 1.10054 17.6317 0.866116 17.8661C0.631696 18.1005 0.5 18.4185 0.5 18.75C0.5 19.0815 0.631696 19.3995 0.866116 19.6339C1.10054 19.8683 1.41848 20 1.75 20H24.25C24.5815 20 24.8995 19.8683 25.1339 19.6339C25.3683 19.3995 25.5 19.0815 25.5 18.75C25.5 18.4185 25.3683 18.1005 25.1339 17.8661C24.8995 17.6317 24.5815 17.5 24.25 17.5ZM23 0H3C2.33696 0 1.70107 0.263392 1.23223 0.732233C0.763392 1.20107 0.5 1.83696 0.5 2.5V15C0.5 15.3315 0.631696 15.6495 0.866116 15.8839C1.10054 16.1183 1.41848 16.25 1.75 16.25H24.25C24.5815 16.25 24.8995 16.1183 25.1339 15.8839C25.3683 15.6495 25.5 15.3315 25.5 15V2.5C25.5 1.83696 25.2366 1.20107 24.7678 0.732233C24.2989 0.263392 23.663 0 23 0ZM12.725 3.75C8.925 3.75 5.4875 5.2875 3 7.775L4.7625 9.5375C6.8 7.5125 9.6125 6.25 12.725 6.25C15.8375 6.25 18.65 7.5125 20.675 9.55L22.4375 7.7875C19.9625 5.2875 16.525 3.75 12.725 3.75ZM6.5375 11.3125L8.3 13.075C9.47612 11.9062 11.0669 11.2502 12.725 11.2502C14.3831 11.2502 15.9739 11.9062 17.15 13.075L18.9125 11.3125C17.325 9.725 15.1375 8.75 12.725 8.75C10.3125 8.75 8.125 9.725 6.5375 11.3125Z"
            fill="#4895EF"
          />
        </svg>
      );
    }
  }, [formType]);

  return (
    <Fragment>
      <p>
        <span>{img}</span>
        {text}
      </p>
    </Fragment>
  );
};

export default TypeOfProfileText;

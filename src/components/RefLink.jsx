import React, { useState, useEffect } from "react";

const RefLink = ({ telegram_id }) => {
  const [copied, setCopied] = useState(false);
  const bot_username = "Toycoin_bot";
  const referralLink = `https://t.me/${bot_username}?start=${telegram_id}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="card-row  bg-blue-200 rounded-xl">
      <input
        type="text"
        value={referralLink}
        readOnly
        className="p-4 w-20 text-xs bg-transparent"
        // style={{ width: "300px", padding: "10px" }}
      />
      <button
        onClick={handleCopy}
        className="primary-btn text-sm text-blue-950 font-extrabold bg-transparent w-max"
      >
        {copied ? "Copied!" : "COPY LINK"}
      </button>
    </div>
  );
};

export default RefLink;

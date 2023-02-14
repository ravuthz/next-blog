"use client";

import { ReactNode, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

export const TextCopyToClipboard = ({ text, children }: any) => {
  const [copied, setCopied] = useState(false);
  console.log('text: ', text);
  return (
    <div>
      {children}
      {/* <CopyToClipboard text={text} onCopy={() => setCopied(true)}> */}
        <button>Copy to clipboard</button>
      {/* </CopyToClipboard> */}
      {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
};

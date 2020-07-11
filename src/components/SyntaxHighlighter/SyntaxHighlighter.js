import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeString } from "./code";

export default function __SyntaxHighlighter() {
  return (
    <>
      <div style={{ padding: "10px", borderRadius: "30px" }}>
        <SyntaxHighlighter
          showLineNumbers
          language="javascript"
          style={tomorrowNightBlue}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

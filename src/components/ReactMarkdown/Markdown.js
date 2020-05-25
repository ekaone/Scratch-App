import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Markdown() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ekaone/deno/master/docs/getting_started/installation.md"
    )
      .then(response => response.text())
      .then(text => setData(text))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <ReactMarkdown source={data} />
    </>
  );
}

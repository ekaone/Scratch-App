import React, { useState, useEffect } from "react";
import BeautyStars from "beauty-stars";

export default function RatingStars() {
  const [value, setValue] = useState(2);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <BeautyStars
        size="20px"
        activeColor="#5e63eb"
        inactiveColor="#ede5e4"
        value={value}
        onChange={value => setValue(value)}
      />
    </>
  );
}

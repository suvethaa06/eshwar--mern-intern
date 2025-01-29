import React, { useState, useEffect } from "react";

export const Useeffectone = () => {
  const [starts, updates] = useState(0);

  useEffect(() => {
    console.log('The starts value has changed : ', starts);
  }, [starts]);

  return (
    <div>
      <h1>{starts}</h1>
      <button onClick={() => updates(starts + 1)}>+</button>
      <button onClick={() => updates(starts - 1)}>-</button>
    </div>
  );
};

   
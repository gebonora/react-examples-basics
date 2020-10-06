import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("aweqweqwe");
  }, [term]);
  // 2nd arg of useEffect:
  // []             -> runs at initial render of component.
  // [someState]    -> runs at initial render and when someState has changed since last render.
  // nothing        -> runs at initial render and every re-render.

  return (
    <div>
      <div className={"ui form"}>
        <div className={"field"}>
          <label>Enter Search Term</label>
          <input
            className={"input"}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Search;

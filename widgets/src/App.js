import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];

const items = [
  { title: "What is React?", content: "React is a JavaScript framework." },
  {
    title: "Why use React?",
    content: "React is a very powerful tool for engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>
      <Route path={"/list"}>
        <Search />
      </Route>
      <Route path={"/dropdown"}>
        <Dropdown
          label={"Select a Color"}
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>
    </div>
  );
};

import React from "react";

const List = () => {
  var personList = ["ravi", "reena", "mohan", "Sandy"];
  const addPerson = (name, index) => {
    if (index == -1) {
      personList = [...personList, name];
    } else {
      personList = [
        ...personList.slice(0, index - 1),
        name,
        ...personList.slice(index),
      ];
      //   personList = personList.map((item, i) => (i == index ? name : item));
    }
    console.table(personList);
  };
  addPerson("harry", -1);
  return <div></div>;
};

export default List;

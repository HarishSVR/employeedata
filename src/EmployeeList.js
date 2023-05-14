import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import OpenForm from "./OpenForm.js";
import Pagination from "react-bootstrap/Pagination";

const EmployeeList = () => {
  const data = [
    { name: "harish", age: "33" },
    { name: "Rohit", age: "57" },
    { name: "Balu", age: "27" },
    { name: "Harika", age: "61" },
    { name: "Harry", age: "17" },
    { name: "Mherren", age: "44" },
    { name: "Rahul", age: "35" },
    { name: "harish", age: "33" },
    { name: "Rohit", age: "57" },
    { name: "Balu", age: "27" },
    { name: "Harika", age: "61" },
    { name: "Harry", age: "17" },
    { name: "Mherren", age: "44" },
    { name: "Rahul", age: "35" },
    { name: "harish", age: "33" },
    { name: "Rohit", age: "57" },
    { name: "Balu", age: "27" },
    { name: "Harika", age: "61" },
    { name: "Harry", age: "17" },
    { name: "Mherren", age: "44" },
    { name: "Rahul", age: "35" },
  ];
  const [list, setList] = useState(data);
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState(-1);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [num, setNum] = useState(1);
  var totalPosts = list.length;
  const addList = (person) => {
    if (currentId == -1) {
      setList([...list, person]);
    } else {
      const updatedList = list.map((item, i) =>
        i == currentId ? person : item
      );
      setList(updatedList);
      setCurrentId(-1);
    }
    setShow(false);
  };

  const onShow = () => {
    setShow(true);
  };
  const onUpdate = (i) => {
    setShow(true);
    setCurrentId(i);
  };
  const deletePerson = (i) => {
    let newList = [...list];
    newList.splice(i, 1);
    setList(newList);
  };
  const editPerson = (i) => {
    let [name, age] = list[i];
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentlist = list.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const next = () => {
    if (num == pageNumbers.length) {
      setNum(pageNumbers.length);
    } else setNum(num + 1);
    setCurrentPage(num);

    console.log("latest", num);
  };
  const prev = () => {
    if (num == 1) {
      setNum(1);
    } else setNum(num - 1);
    setCurrentPage(num);

    console.log("latest", num);
  };
  console.log("latest11", currentPage);
  return (
    <Container>
      <h1>Employee List</h1>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onShow}>Addnew</button>
      {show && (
        <OpenForm
          addList={addList}
          currentId={currentId}
          data={list[currentId] || {}}
        />
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {currentlist
            .filter(
              (user) =>
                user.name.toLowerCase().includes(query) ||
                user.age.includes(query)
            )
            .map((person, i) => {
              return (
                <tr>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>
                    <button onClick={() => onUpdate(i)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deletePerson(i)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>

        <Pagination size="lg" className="d-flex justify-content-between">
          <Button onClick={() => prev()}>prevs</Button>
          <div className="d-flex">
            {pageNumbers.map((number) => (
              <Pagination.Item
                onClick={() => paginate(number)}
                href="!#"
                active={number === currentPage}
              >
                {number}
              </Pagination.Item>
            ))}
          </div>
          <Button onClick={() => next()}>next</Button>
        </Pagination>
      </Table>
    </Container>
  );
};
export default EmployeeList;

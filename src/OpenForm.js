import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";

function OpenForm({ addList, data, setShow }) {
  const [person, setPerson] = useState(data);

  const insertData = (event) => {
    //console.log("checking", event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setPerson({ ...person, [name]: value });
  };
  //console.log(person);
  const addEmploye = (e) => {
    e.preventDefault();
    addList(person);

    console.log("latest11", person);
  };
  const close = () => {
    setShow(false);
  };
  return (
    <Modal show>
      <Modal.Header>
        <Modal.Title>New Employee</Modal.Title>
        <CloseButton onClick={() => close()} />
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <div>
            <label>Name :</label>
            <input
              type="text"
              name="name"
              value={person.name ?? ""}
              placeholder="enter name"
              onChange={insertData}
            ></input>
          </div>
          <div>
            <label>Age :</label>
            <input
              type="number"
              name="age"
              value={person.age ?? ""}
              placeholder="enter number"
              onChange={insertData}
            ></input>
          </div>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={addEmploye}>Add</button>
      </Modal.Footer>
    </Modal>
  );
}

export default OpenForm;

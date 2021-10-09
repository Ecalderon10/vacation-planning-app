import React from "react";
import "./ViewTask.css";
import { useQuery, useMutation } from "@apollo/client";
import {
  Table,
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Select,
} from "react-bootstrap";
import { REMOVE_TASK, ADD_TASK } from "../../utils/mutations";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");

  if (name === "title") {
    setTitle(value);
  } else if (name === "details") {
  }

  //   const [formState, setFormState] = useState({
  //     title: "",
  //     details: "",
  //     dueDate: "",
  //     assignee: "",
  //   });
  const [addTask, { data, loading, error }] = useMutation(ADD_TASK);
  //   if (loading) return "Submitting...";
  //   if (error) return `Submission error! ${error.message}`;

  // submit form
  const handleFormSubmit = async (event) => {
    useMutation(ADD_TASK, {
      variables: {
        title: title,
        details: details,
        dueDate: dueDate,
        assignee: assignee,
      },
    });
    await setTitle("");
  };

  return (
    <Form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     addTask({
    //       variables: {
    //         title: input.title,
    //         details: input.details,
    //         dueDate: input.dueDate,
    //         // status: input.status,
    //         assignee: input.assignee,
    //       },
    //     });
    //   }}
    >
      <h2>Add A New Task</h2>
      <Form.Group className="mb-3">
        <Form.Label>Title*</Form.Label>
        <Form.Control type="text" name="title" value={title} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Details</Form.Label>
        <Form.Control type="text" name="details" value={details} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Due Date*</Form.Label>
        <Form.Control type="date" name="dueDate" value={dueDate} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Assignee*</Form.Label>
        <Form.Control type="text" name="assignee" value={assignee} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTask;

import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import {
  MainDiv,
  FormContainer,
  Input,
  Button,
  ReturnHome,
} from "./styledComponent";
const AddResourceItem = () => {
  const [form, setForm] = useState({
    title: "",
    link: "",
    resource: "",
    description: "",
  });
  const saveData = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (form.title.length < 3) {
      toast.error(
        "Title must be at least 3 characters,please enter valid data",
        {
          position: "bottom-right",
        }
      );
    } else if (validator.isURL(form.link) === false) {
      toast.error("Link must be valid", { position: "bottom-right" });
    } else if (form.resource.length < 3) {
      toast.error(
        "Resource must be at least 3 character,please enter valid data",
        {
          position: "bottom-right",
        }
      );
    } else if (form.description.length < 20) {
      toast.error(
        "Description must be at least 20 characters,please enter valid data",
        {
          position: "bottom-right",
        }
      );
    } else {
      const url =
        " https://media-content.ccbp.in/website/react-assignment/add_resource.json";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      };
      fetch(url, options);
      toast.success("Added Successfully", {
        position: "bottom-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setForm({
        title: "",
        link: "",
        resource: "",
        description: "",
      });
    }
  };
  return (
    <div>
      <MainDiv className="main-div">
        <FormContainer className="left">
          <Link to="/">
            <ReturnHome>
              <BsChevronLeft />
              <p>Resources</p>
            </ReturnHome>
          </Link>
          <h1>Item Details</h1>
          <form onSubmit={onSubmit}>
            <p className="box-description">ITEM NAME</p>
            <Input
              value={form.title}
              onChange={saveData}
              type="text"
              name="title"
              required
            />
            <p className="box-description">LINK</p>
            <Input
              value={form.link}
              onChange={saveData}
              type="text"
              name="link"
              required
            />
            <p className="box-description">RESOURCE NAME</p>
            <Input
              value={form.resource}
              onChange={saveData}
              type="text"
              name="resource"
              required
            />
            <p className="box-description">DESCRIPTION</p>
            <textarea
              value={form.description}
              onChange={saveData}
              name="description"
              cols="42"
              rows="5"
              required
            ></textarea>
            <br />
            <Button type="submit">CREATE</Button>
          </form>
        </FormContainer>
      </MainDiv>
      <ToastContainer />
    </div>
  );
};

export default AddResourceItem;

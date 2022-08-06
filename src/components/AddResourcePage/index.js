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
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (form.title.length < 5) {
      toast.error("Title must be at least 5 characters long", {
        position: "bottom-right",
      });
    } else if (validator.isURL(form.link) === false) {
      toast.error("Link must be valid URL", { position: "bottom-right" });
    } else if (form.resource.length < 3) {
      toast.error("Resource must be at least 3 characters", {
        position: "bottom-right",
      });
    } else if (form.description.length < 20) {
      toast.error("Description must be at least 30 characters", {
        position: "bottom-right",
      });
    } else {
      fetch(
        " https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      toast.success("Added Successfully", {
        position: "bottom-center",
        autoClose: 5000,
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
          <h2>Item Details</h2>
          <form onSubmit={onSubmit}>
            <p className="box-description">ITEM NAME</p>
            <Input
              value={form.title}
              onChange={handleChange}
              type="text"
              name="title"
              required
            />
            <p className="box-description">LINK</p>
            <Input
              value={form.link}
              onChange={handleChange}
              type="text"
              name="link"
              required
            />
            <p className="box-description">RESOURCE NAME</p>
            <Input
              value={form.resource}
              onChange={handleChange}
              type="text"
              name="resource"
              required
            />
            <p className="box-description">DESCRIPTION</p>
            <textarea
              value={form.description}
              onChange={handleChange}
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

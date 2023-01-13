import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const [form, setform] = useState({
    fname: "",
    lname: "",
  });

  const Play = (e) => {
    const { name, value } = e.target;
    setform((names) => {
      return {
        ...names,
        [name]: value,
      };
    });
    setform("");
  };

  const Submit = (e) => {
    e.preventDefault();
    if (!form === "") {
      toast("please this field was requires");
    } else {
      toast(`my name is ${form.fname} and my last name is ${form.lname}`, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={form.fname}
              onChange={Play}
              name="fname"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={form.lname}
              onChange={Play}
              name="lname"
            />
            <br />
            <br />
            <button className="btn btn-warning" onClick={Submit}>
              form submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Contact;

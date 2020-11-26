import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    //takes all properties on formProps and puts them as properties of the input
    return (
      <div className={"field"}>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    //handleSubmit from Redux-form does the preventDefault and sends the Fields in formValues as arg.
    console.log(formValues);
  }

  render() {
    return (
      <form
        className={"ui form"}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name={"title"}
          component={this.renderInput}
          label={"Enter Title"}
        />
        <Field
          name={"description"}
          component={this.renderInput}
          label={"Enter Description"}
        />
        <button className={"ui button primary"}>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

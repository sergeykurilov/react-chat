import RegisterForm from "../components/RegisterForm";
import { withFormik } from 'formik';
import validateFunc from "utils/validate";

export default withFormik({

  validate: values => {
    let errors = {};

    const validate = validateFunc({isAuth: false});


    Object.keys(values).forEach(
      key => validate[key] && validate[key](errors, key, values[key]
    ));

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'RegisterForm',
})(RegisterForm);
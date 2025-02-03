import { Formik } from "formik";
import * as Yup from "yup";
import sc from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(3, "мінімальна кількість символів - 3")
    .max(50, "максимальна кількість символів - 50"),
  number: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(3, "мінімальна кількість символів - 3")
    .max(50, "максимальна кількість символів - 50"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const onSubmit = ({ name, number }, { resetForm }) => {
    const isExist = contacts.find((contact) => name === contact.name);

    if (isExist) {
      return alert(`${name} is alredy in contacts.`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className={sc.form} onSubmit={handleSubmit}>
          <label className={sc.label}>
            Name
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={sc.input}
            />
            {touched.name && errors.name ? (
              <div className={sc.error}>{errors.name}</div>
            ) : null}
          </label>
          <label className={sc.label}>
            Number
            <input
              type="text"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={sc.input}
            />
            {touched.number && errors.number ? (
              <div className={sc.error}>{errors.number}</div>
            ) : null}
          </label>
          <button type="submit" className={sc.button}>
            Add contact
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;

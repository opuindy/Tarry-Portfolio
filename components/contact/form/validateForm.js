export const validateForm = (values) => {
  let errors = {};
  const regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

  if (!values.name) {
    errors.name = `Full name required`;
  }

  if (!values.email) {
    errors.email = `Email address required`;
  } else if (!regex.test(values.email)) {
    errors.email = '*invalid email format';
  }

  if (!values.message) {
    errors.message = `Please write a message`;
  }
  return errors;
};

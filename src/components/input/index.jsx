import PropTypes from 'prop-types';
import {   Textarea, Input, Text } from '@chakra-ui/react';

const FormikInput = props => {
  const {
    label,
    handleChange,
    handleBlur,
    value,
    hasError,
    messageError,
    readOnly = false,
    isTextArea = false,
  } = props;

  return (
    <>
      <label htmlFor={label}>{label}</label>
      {!isTextArea && (
        <Input
          id={label}
          name={label}
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          readOnly={readOnly}
          disabled={readOnly}
          placeholder={label}
        />
      )}
      {isTextArea && (
        <Textarea
          id={label}
          name={label}
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          readOnly={readOnly}
          disabled={readOnly}
          placeholder={label}
        />
      )}
      {hasError ? <Text>{messageError}</Text> : null}
    </>
  );
};
export default FormikInput;
FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
  hasError: PropTypes.bool,
  messageError: PropTypes.string,
  readOnly: PropTypes.bool,
  isTextArea: PropTypes.bool,
};

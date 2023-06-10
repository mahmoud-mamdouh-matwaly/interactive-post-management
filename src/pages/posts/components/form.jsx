import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import BaseButton from 'components/button';
import { useFormik } from 'formik';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import FormikInput from 'components/input';
import { object, string } from 'yup';

const validationSchema = object({
  title: string().required('Title is required'),
  body: string().required('Description is required'),
});

const PostForm = props => {
  const { postItem, handleSubmit = () => {}, isView = false } = props;
  const [disabled, setDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      title: postItem?.title,
      body: postItem?.body,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit({ ...values });
    },
  });

  const handleChange = useCallback(e => {
    formik.handleChange(e);
    setDisabled(false);
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex direction={isView ? 'column' : 'row'} w="100%">
        <Box w={isView ? '100%' : '48%'}>
          <FormikInput
            label="Title"
            handleChange={handleChange}
            value={formik.values.title}
            hasError={!!(formik.touched.title && formik.errors.title)}
            messageError={formik.errors.title}
            name="title"
            readOnly={isView}
          />
        </Box>
        <Spacer />
        <Box w={isView ? '100%' : '48%'}>
          <FormikInput
            label="Description"
            handleChange={handleChange}
            value={formik.values.body}
            hasError={!!(formik.touched.body && formik.errors.body)}
            messageError={formik.errors.body}
            isTextArea={true}
            name="body"
            readOnly={isView}
          />
        </Box>
      </Flex>
      {!isView ? (
        <Flex w="100%" align="center" justify={'end'} my="md">
          <BaseButton
            type="primary"
            htmlType="submit"
            text="Submit"
            bg="blue.600"
            color="white"
            isDisabled={disabled}
          />
        </Flex>
      ) : null}
    </form>
  );
};

export default memo(PostForm);

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  postItem: PropTypes.object,
  isView: PropTypes.bool,
};

import { memo } from 'react';
import PropTypes from 'prop-types';
import BaseButton from 'components/button';
import { useFormik } from 'formik';
import { Flex, Box } from '@chakra-ui/react';
import FormikInput from "components/input";

const PostForm = props => {
  const { postItem, handleSubmit = () => {}, isView = false } = props;

  const formik = useFormik({
    initialValues: {
      title: postItem?.title || '',
      body: postItem?.body || '',
    },
    onSubmit: values => {
      handleSubmit({ ...values });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex direction={isView ? 'column' : 'row'} w="100%">
        <Box>
          <FormikInput
            label="Title"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.title}
            hasError={!!(formik.touched.title && formik.errors.title)}
            messageError={formik.errors.title}
          />
        </Box>
        <Box>
          <FormikInput
            label="Description"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.body}
            hasError={!!(formik.touched.body && formik.errors.body)}
            messageError={formik.errors.body}
            isTextArea={true}
          />
        </Box>
      </Flex>
      {!isView ? (
        <Flex gutter={[10, 10]} align={'end'}>
          <BaseButton type="primary" htmlType="submit" text="Submit" />
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

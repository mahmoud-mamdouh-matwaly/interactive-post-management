import { memo } from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Flex, Input, Heading, Box } from '@chakra-ui/react';

const PageHeading = props => {
  const { handleChangeSearch = () => {}, title, hasBack = false, hasSearch = false } = props;
  const navigate = useNavigate();

  return (
    <Flex h="62px" justify={'space-between'}>
      <Box>
        <Flex align={'center'} justify={'space-between'}>
          {hasBack ? <ArrowBackIcon onClick={() => navigate(-1)} /> : null}

          <Heading as="h2" size="lg" m={0}>
            {title}
          </Heading>
        </Flex>
      </Box>
      {hasSearch ? (
        <Box>
          <Input placeholder="Search for Posts" onChange={handleChangeSearch} />
        </Box>
      ) : null}
    </Flex>
  );
};

export default memo(PageHeading);

PageHeading.propTypes = {
  handleChangeSearch: PropTypes.func,
  title: PropTypes.string,
  hasBack: PropTypes.bool,
  hasSearch: PropTypes.bool,
};

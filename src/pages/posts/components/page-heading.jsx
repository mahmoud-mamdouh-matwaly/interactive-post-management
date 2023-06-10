import { memo } from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Flex, Input, Heading, Box } from '@chakra-ui/react';
import BaseButton from 'components/button';

const PageHeading = props => {
  const { handleChangeSearch = () => {}, title, hasBack = false, hasSearch = false } = props;
  const navigate = useNavigate();

  return (
    <Flex h="62px" justify={'space-between'}>
      <Box>
        <Flex align={'center'} justify={'space-between'}>
          {hasBack ? (
            <BaseButton
              className="btn"
              type="text"
              icon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              p="0"
              bg="transparent"
              m="0"
              _hover={{
                bg: 'gray.700',
                color: 'white',
              }}
            />
          ) : null}

          <Heading as="h2" size="md" m={0}>
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

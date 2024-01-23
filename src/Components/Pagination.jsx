import React from 'react';
import { Button, HStack, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({ onPrev, onNext }) => {
  return (
    <HStack spacing={4} align="center" justify="center">
      <Button
        
        leftIcon={<Icon as={ChevronLeftIcon} />}
       
       
      >
        Previous
      </Button>
      <Button
    
       
        rightIcon={<Icon as={ChevronRightIcon} />}
      
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;

import React from 'react';
import { Text, Box, Accordion, AccordionPanel } from 'grommet';

interface Props {}

const Sidebar: React.FC<Props> = props => {
  return (
    <Accordion>
      <AccordionPanel label="Panel 1">
        <Box pad="medium" background="light-2">
          <Text>One</Text>
        </Box>
      </AccordionPanel>
      <AccordionPanel label="Panel 2">
        <Box pad="medium" background="light-2">
          <Text>Two</Text>
        </Box>
      </AccordionPanel>
    </Accordion>
  );
};

export default Sidebar;

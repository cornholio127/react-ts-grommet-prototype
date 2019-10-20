import React from 'react';
import Layout from './Layout';
import { Grommet, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Arial',
      size: '16px',
      height: '18px',
    },
  },
});

const App: React.FC = () => {
  return (
    <Grommet theme={theme}>
      <Layout>
        <h1>react ts grommet prototype</h1>
      </Layout>
    </Grommet>
  );
};

export default App;

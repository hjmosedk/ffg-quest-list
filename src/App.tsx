import { Fragment } from 'react';
import QuestList from './components/QuestList';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <QuestList />
      </Container>
    </Fragment>
  );
};

export default App;

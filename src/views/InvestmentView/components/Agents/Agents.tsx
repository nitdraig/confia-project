import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableAgents from './components/TableAgents';
import { Container } from '@mui/material';

interface tablesAgents {
  title: string;
  columns: string[];
  rows: string[][];
}

interface TablesAgentsProps {
  tables: tablesAgents[];
}

const Agents: React.FC<TablesAgentsProps> = ({ tables }) => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          sx={{ textTransform: 'uppercase' }}
          variant={'h5'}
          color={'text.secondary'}
          fontWeight={700}
        >
          Agentes comercializadores
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'center'}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          distinctio error voluptas perferendis quam laborum officiis aliquam,
          vero molestiae laudantium culpa ipsum voluptatibus. Rerum quos esse in
          qui iure labore.
        </Typography>
      </Box>
      <Container>
        <TableAgents tables={tables} />
      </Container>
    </Box>
  );
};

export default Agents;

import { Button } from '@mui/material';
import styled from 'styled-components';

export default function MyButton({ variant='contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(Button)`
  margin-top: 8px !important;
`;

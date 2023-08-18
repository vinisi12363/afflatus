import styled from 'styled-components';
import { Typography } from '@mui/material'; 

export const Title = ({ title }) => {
  return (
    <>
      <StyledTypography variant="h4" a>
        {title}
      </StyledTypography>
    </>
  );
};

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { FormControl } from '@mui/material';
import { Select } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { InputLabel } from '@mui/material';
import styled from 'styled-components';

const FormControlWrapper = styled.section`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export default function MultiSelect({
  label,
  name,
  id,
  value,
  onChange,
  children,
}) {
  const inputLabelRef = useRef(null);

  return (
    <FormControlWrapper>
      <FormControl variant="outlined">
        <InputLabel ref={inputLabelRef} htmlFor={id}>
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput
              labelWidth={
                ReactDOM.findDOMNode(inputLabelRef.current)?.offsetWidth
              }
              name={name}
              id={id}
            />
          }
        >
          {children}
        </Select>
      </FormControl>
    </FormControlWrapper>
  );
}

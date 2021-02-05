import React, { useCallback, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  max-width: 500px;
  height: 60px;
  font-size: 30px;
  padding: 20px;
  border: 1px solid;
  border-radius: 5px;
`;

export default function Search({ setUsername }) {
  const [inputVal, setInputVal] = useState();

  const throttled = useRef(throttle((val) => setUsername(val), 1000)).current;
  const onInputChange = useCallback(
    (event) => {
      setInputVal(event.target.value);
      throttled(event.target.value);
    },
    [throttled],
  );

  return (
    <InputContainer>
      <Input
        placeholder="Enter username here"
        onChange={onInputChange}
        value={inputVal}
      />
    </InputContainer>
  );
}

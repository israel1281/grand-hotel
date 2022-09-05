import styled from "styled-components";

const P = styled.p`
  font-size: var(--text-size);
  line-height: 2;
  font-family: var(--heading-font);
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0.4)}rem;
`;

export default P;

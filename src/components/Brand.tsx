import styled from "styled-components";
import { Link } from "react-router-dom";

const Brand = styled(Link)`
  transition: color 0.25s ease-in-out;
  color: var(--primary);

  &:hover {
    color: var(--dark);
    text-decoration: none;
  }
`;

export default Brand;

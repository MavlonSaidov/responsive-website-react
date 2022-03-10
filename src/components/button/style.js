import styled from "styled-components"
import arrow from '../../assets/images/icons/right-arrow.svg'

export const Button = styled.button`
  display: ${(props) => props.disabled ? 'none' : 'block'};
  width: ${(props) => props.propsWidth};
  border: 1px solid #1147AB;
  box-sizing: border-box;
  transition: all ease 0.5s;
  padding: 12px ${(props) => props.arrow == 'none' ? '48px' : '56px'} 12px ${(props) => props.arrow == 'none' ? '48px' : '24px'};
  background-color: transparent;
  position: relative;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0B0A6A;
  cursor: pointer;

  &:before {
    content: "";
    display: ${(props) => props.arrow == 'none' ? 'none' : 'block'};
    width: 24px;
    height: 24px;
    position: absolute;
    background-image: url(${arrow});
    background-size: contain;
    right: 18px;
    transition: all ease 0.5s;
  }

  &:hover {
    opacity: 0.8;
  }

  &:hover&:before {
    right: 5px;
  }

  @media (max-width: 767px) {
    &:before {
      display: none;
    }
    padding: 12px 18px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`
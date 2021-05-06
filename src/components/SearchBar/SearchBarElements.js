import styled from 'styled-components';
import Img from '../SearchBar/background_img1.png';
import { ImSearch } from "react-icons/im";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const SearchContainer = styled.div`
    background-image: url(${Img});
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 500px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const SearchBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;



export const SearchContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;


export const SearchWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const SearchIcon = styled(ImSearch)`
    color: #567a22;
    font-size: 20px
`;

export const Form = styled.form`
    position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 30rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    border: 1px solid #fff;
    border-radius: 4px;
    height: 15px

`;

export const Input = styled.input`
  font-size: 18px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  align-items: center;
  border: none;
  color: #010606;

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
    justify-items: center;
  }
`;

export const SearchButton = styled.nav`
    border-radius: 50px;
    background: #567a22;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-ease-in-out;
        background: #fff;
        color: #567a22;
    }
`;


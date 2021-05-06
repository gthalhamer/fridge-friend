import styled from 'styled-components';

export const RecyclingContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: 20px;


    @media screen and (max-width: 1000px) {
        margin-top: 30px;
        height: 800px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 5px;
        height: 1200px;
    }
`;

export const RecyclingWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const RecyclingH1 = styled.h1`
    font-size: 2.5rem;
    color: #567a22;
    margin-bottom: 10px;


    @media screen and (max-width: 480px) {
        margin-top: 60px;
        font-size: 2rem;
    }
`;

export const RecyclingCard = styled.a`
    background: #92c14d;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const RecyclingIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 100px;
`;

export const RecyclingH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #fff;
`;

export const RecyclingP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;
`;
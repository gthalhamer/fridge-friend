import styled from 'styled-components';



export const RecipeContainer = styled.div`
    height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 800px) {
        height: 500px;
    }

    @media screen and (max-width: 480px) {
        height: 500px;
    }
`;

export const RecipeWrapper = styled.div`
    max-width: 100%;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 10px;
    padding: 0 15px;
`;

export const RecipeCard = styled.div`
    background: #92c14d;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 370px;
    width: 360px;

    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.5);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        height: 390px;
        width: 380px;
    }

    @media screen and (max-width: 800px) {
        height: 450px;
        width: 450px;
    }
`;

export const RecipeImg = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 10px;

    @media screen and (max-width: 1000px) {
        height: 220px;
        width: 220px;
    }

    @media screen and (max-width: 800px) {
        height: 255px;
        width: 255px;
        margin-top: 28px;

    }
`;

export const RecipeH1 = styled.h1`
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
`;

export const RecipeCal = styled.div`
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: #fff;
    align-content: flex-start;
    text-align: center;
`;

export const RecipeUrl = styled.a`
    font-size: 0.8rem;
    margin-bottom: 10px;
    border-radius: 20px;
    background: #567a22;
    white-space: nowrap;
    padding: 5px 10px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
`;

export const RecipeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 25px;
    margin-left: 25px;
    margin: 25px 25px;

    @media screen and (max-width: 1550px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1160px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`


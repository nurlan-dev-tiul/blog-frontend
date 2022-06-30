import styled from '@emotion/styled';


export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-bottom: 25px;
    
    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const NotPostText = styled.h5`
    text-align: center;
    margin-top: 50px;
    font-size: 20px;
    color: #3F434A;
    font-weight: 700;
`;


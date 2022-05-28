import styled from '@emotion/styled';
import Search from '@mui/icons-material/Search';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: ${props => props.open ? '55' : '0'};
    opacity: ${props => props.open ? '1' : '0'};
    pointer-events: ${props => props.open ? 'all' : 'none'};
    transition: 0.4s;
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 25px 0px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchBox = styled.div`
    width: 40%;
    padding: 0px 10px;
    display: flex;
    @media (max-width: 700px) {
        width: 100%;
        padding: 0px 20px;
    }
`;

export const SearchInput = styled.input`
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const SearchButton = styled.button`
    border: none;
    padding: 8px 15px ;
    background: rgb(255, 112, 4);
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const SearchIcon = styled(Search)`
    font-size: 22px;
    color: #fff;
`;

export const FabBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
    z-index: 200;
    background: transparent;

`;

export const ButtonClose = styled.button`
    border-radius: 100%;
    border: none;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #f44336;
    cursor: pointer;
    z-index: 201;
    margin: auto;
`;
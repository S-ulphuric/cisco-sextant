import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #99ccff;
    height: 40px;
`;

const Title = styled.h3`
    font-size: 20px;
    text-align: center;
    align-self: center;
    padding-bottom: 10px;
    color: #003366;
`;

function Banner(){
    return (
        <Wrapper>
            <Title> Cisco Sextant </Title>
        </Wrapper>
    ); 
};

export default Banner;
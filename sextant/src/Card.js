import styled from 'styled-components';
import Fetch from './Fetch';
import Client from './Client';

const CardTitle = styled.div`
    color: #003366};
    font-size: 18px;
    font-weight: normal;
    height: 18px;
    marging: 20px;
`;

const CardComponent = styled.div`
    align-self: center;
    marging: 30px;
    font-size: 26px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding: 5px;
    align-self: center;
    marging: 10px;
    background-color: #66ffff;
    border-radius: 4px;
    &:hover {
    cursor: pointer;
  }
`;

function Card({title, children}) {
    return (
        <div>
            <CardWrapper>
            
                <CardTitle>
                    {title}
                </CardTitle>
                
                <CardComponent>
                   {children}
                </CardComponent>
                
            </CardWrapper>
        </div>
    ); 
}

export default Card;
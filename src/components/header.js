import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const ContainerHeader = styled.View`
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const HeaderTitle = styled.Text`
    color: ${theme.colors.secondary};
    font-size: 24px;
    font-weight: bold;
`;

const Header = () => {
    return <ContainerHeader>
        <HeaderTitle>Étudiants de Poudlard</HeaderTitle>
    </ContainerHeader>;
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';

const Container = styled.View`
    flex: 1;
    padding: 10px;
`;

const Thrombinoscrope = () => {
    return <Container>
        <Header />
    </Container>;
};

export default Thrombinoscrope;

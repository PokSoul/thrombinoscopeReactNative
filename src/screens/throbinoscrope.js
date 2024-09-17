import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import SearchBar from '../components/searchBar';

const Container = styled.View`
    flex: 1;
    padding: 10px;
`;

const Thrombinoscrope = () => {

    const [searchQuery, setSearchQuery] = useState('');

    return <Container>
        <Header />
        <SearchBar placeholder='Rechercher un étudiant...' onChangeText={setSearchQuery} value={searchQuery} />
    </Container>;
};

export default Thrombinoscrope;

import React from 'react';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import theme from '../styles/theme';

const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 10px 15px;
    margin: 10px 20px;
    border: 1px solid ${theme.colors.secondary};
`;
const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
    color: ${theme.colors.text};
`;

const SearchBar = ({ placeholder = 'Rechercher...', onChangeText, value }) => {
    return (
        <SearchContainer>
            <Feather name="search" size={20} color="#999" />
            <SearchInput
                placeholder={placeholder}
                placeholderTextColor="#999"
                onChangeText={onChangeText}
                value={value}
            />
        </SearchContainer>
    );
};

export default SearchBar;

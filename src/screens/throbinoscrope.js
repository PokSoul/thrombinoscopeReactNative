import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import { getStudents } from '../api/axios';
import { SectionList } from 'react-native';

const Container = styled.View`
    flex: 1;
    padding: 10px;
`;

const PersonContainer = styled.View`
    flex-direction: row;
    padding: 10px 20px;
    align-items: center;
`;

const PersonImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 15px;
`;
const PersonInfo = styled.View`
    flex: 1;
`;

const PersonName = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
`;

const PersonGender = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
`;

const Thrombinoscrope = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudents();
                setStudents(data);
            } catch (err) {
                setError('Une erreur est survenue lors du chargement des donneés.');
            }
        };
        fetchStudents();
    }, []);

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const groupedStudents = filteredStudents.reduce((acc, student) => {
        const firstLetter = student.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(student);
        return acc;
    }, {});

    const sections = Object.keys(groupedStudents)
        .sort()
        .map((letter) => ({
            title: letter,
            data: groupedStudents[letter],
        }));

    const renderItem = ({ item }) => (
        <PersonContainer>
            <PersonImage source={{ uri: item.image || 'https://via.placeholder.com/50' }} />
            <PersonInfo>
                <PersonName>{item.name}</PersonName>
                <PersonGender>{item.gender}</PersonGender>
            </PersonInfo>
        </PersonContainer>
    );

    return (
        <Container>
            <Header />
            <SearchBar
                placeholder="Rechercher un étudiant..."
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <SectionList
                sections={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
        </Container>
    );
};

export default Thrombinoscrope;

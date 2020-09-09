import React from 'react';
import { View, SectionList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Group, GroupTitle } from '../components';

const HomeScreen = ({ navigation }) => {

  const DATA = [
    {
      title: '14 сентября',
      data: [
        {
          time: '15:30',
          active: true,
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        },
        {
          time: '15:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        }
      ]
    },
    {
      title: '16 сентября',
      data: [
        {
          time: '15:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        },
        {
          time: '15:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        },
        {
          time: '15:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        }
      ]
    }
  ];
    return (
        <Container>
          <GroupList
            sections={DATA}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Group {...item} />}
            renderSectionHeader={({ section: { title } }) => {
              return <GroupTitle title={title}></GroupTitle>
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Patient')}>
            <PlusButton>
              <Ionicons size={32} name="ios-add" color="white" />
            </PlusButton>
          </TouchableOpacity>
        </Container>
    );
}


const GroupList = styled.SectionList`
  padding-bottom: 100px;
`

const PlusButton = styled.View`
  background: #2A86FF;
  box-shadow: 0px 0px 17px rgba(42, 134, 255, 0.5);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  bottom: 25px;
  right: 25px;
  justify-content: center;
  align-items: center;
`

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, SectionList } from 'react-native';
import styled from 'styled-components/native';

import { Group, GroupTitle } from './components';

export default function App() {
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
      {/* <Group {...group} />
      <Group {...group} /> */}

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Group {...item} />}
        renderSectionHeader={({ section: { title } }) => {
          return <GroupTitle title={title}></GroupTitle>
        }}
      />
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
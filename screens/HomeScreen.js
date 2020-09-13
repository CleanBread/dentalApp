import React from 'react';
import { View, SectionList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

import { Group, GroupTitle, PlusBtn } from '../components';

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
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        },
        {
          time: '15:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            tel: '+7 (999) 200-66-55',
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
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        },
        {
          time: '15:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        },
        {
          time: '15:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Вася Пупкин',
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-72.userapi.com/c841230/v841230790/16d12/GlMuOg_6qdo.jpg?ava=1'
          }
        },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            tel: '+7 (999) 200-66-55',
            avatar:
              'https://sun9-67.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
          }
        }
      ]
    }
  ];

  const [data, setData] = React.useState(DATA)

  React.useEffect(() => {
    axios.get('https://trycode.pw/c/TCYRN.json').then(({ data }) => {
      // setData(data.users)
    })
  }, [])

  return (
    <Container>
      {data && (<GroupList
        contentInset={{ bottom: 100 }}
        sections={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Group navigation={navigation} patient={item} />}
        renderSectionHeader={({ section: { title } }) => {
          return <GroupTitle title={title}></GroupTitle>
        }}
      />)
      }
      <PlusBtn navigation={navigation} to="AddChangePatient" title={{ title: 'Добавить пациента' }}></PlusBtn>
    </Container>
  );
}


const GroupList = styled.SectionList`
  padding-bottom: 100;
`

const PlusButton = styled.View`
  background: #2A86FF;
  box-shadow: 0px 0px 17px rgba(42, 134, 255, 0.5);
  border-radius: 50;
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
  background: #ffffff;
  height: 100%;
  position: relative;
`;

export default HomeScreen;

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

import { GrayText } from '../styles';

const Group = ({ user, diagnosis, time, active, navigation }) => {
  return (
    <GroupBlock>
      <GroupItem onPress={() => navigation.navigate('Patient')}>
        <Avatar source={{ uri: user.avatar }} />
        <View>
          <FullName>{user.fullname}</FullName>
          <GrayText>{diagnosis}</GrayText>
        </View>
        <GroupTime active={active ? 1 : 0}>
          <GroupTimeText active={active ? 1 : 0}>{time}</GroupTimeText>
        </GroupTime>
      </GroupItem>
    </GroupBlock>
  );
}

Group.defaultProps = {
  title: 'Untitled',
  items: []
}
const GroupTime = styled.View`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
  borderRadius: 18;
  align-items: center;
  padding: 8px 0;
  width: 70px;
  text-align: center;
  margin-left: auto;
`

const GroupTimeText = styled.Text`
  color: ${props => props.active ? 'white' : '#4294FF;'};
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
`


const FullName = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #000;
  font-weight: 700;
  margin-bottom: 2px;
`

const GroupBlock = styled.View`
  padding: 0 20px;
`;

const GroupItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
  &:hover {
    background: #000;
  }
`;

const Avatar = styled.Image`
  border-radius: 50;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export default Group;
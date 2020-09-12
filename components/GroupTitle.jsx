import React from 'react';
import styled from 'styled-components/native';

const GroupTitle = ({ title }) => {
  return (
    <GroupTitleItem>{title}</GroupTitleItem>
  )
}

const GroupTitleItem = styled.Text`
  font-size: 22px;
  line-height: 30px;
  color: #000;
  font-weight: 700;
  padding: 10px 20px 0;
  background: #ffffff;
`;

export default GroupTitle
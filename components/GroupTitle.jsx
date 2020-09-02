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
  padding: 0 20px;
  display: block;
  margin-top: 25px;
`;

export default GroupTitle
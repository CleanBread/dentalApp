import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const PlusBtn = ({ navigation, to, title }) => {
    return (
        <Container>

            <TouchableOpacity onPress={() => navigation.navigate(to, title)}>
                <PlusButton>
                    <Ionicons size={32} name="ios-add" color="white" />
                </PlusButton>
            </TouchableOpacity>
        </Container>
    );
}

const Container = styled.View`
    position: absolute;
    bottom: 25px;
    z-index: 10;
    right: 25px;
`

const PlusButton = styled.View`
  background: #2A86FF;
  box-shadow: 0px 0px 17px rgba(42, 134, 255, 0.5);
  border-radius: 50;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
`

export default PlusBtn;

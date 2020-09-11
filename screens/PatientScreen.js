import React from 'react';
import { View, Text, TouchableOpacity, Clipboard } from 'react-native';
import styled from 'styled-components/native';

import { GrayText, Button } from '../styles';

const PatientScreen = () => {
    return (
        <Container>
            <FullName>Марина Алмазова</FullName>
            <TouchableOpacity onPress={() => Clipboard.setString('+7 (999) 200-66-55')}>
                <GrayText>+7 (999) 200-66-55</GrayText>
            </TouchableOpacity>
            <PatientButtons>
                <Button width={'80%'} height={'45'} bg={0}>
                    <FormulaBtnText>Формула зубов</FormulaBtnText>
                </Button>
            </PatientButtons>
        </Container>
    );
}
const FormulaBtnText = styled.Text`
    font-size: 16px;
    line-height: 19px;
    margin: 12px;
    text-align: center;
    color: #ffffff;
`

const PatientButtons = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 20px;
`

const FullName = styled.Text`
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 7px;
`

const Container = styled.View`
    padding: 25px
`

export default PatientScreen;

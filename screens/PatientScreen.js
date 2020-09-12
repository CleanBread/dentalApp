import React from 'react';
import { View, Text, TouchableOpacity, Clipboard, Linking } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { GrayText, Button } from '../styles';

const PatientScreen = ({ route }) => {
    const { user } = route.params

    return (
        <PatientView>
            <Container>
                <FullName>{user.fullname}</FullName>
                <TouchableOpacity onPress={() => Clipboard.setString(user.tel)}>
                    <GrayText>{user.tel}</GrayText>
                </TouchableOpacity>
                <PatientButtons>
                    <Button width={"100%"} height={'45'} bg={0}>
                        <FormulaBtnText>Формула зубов</FormulaBtnText>
                    </Button>
                    <CallBtn onPress={() => Linking.openURL(`tel:${user.tel}`)}>
                        <Ionicons size={22} name="ios-call" color="white" />
                    </CallBtn>
                </PatientButtons>

            </Container>
            <PatientAppointments>
                <PatientAppointmentsText>Приемы</PatientAppointmentsText>
            </PatientAppointments>
        </PatientView>
    );
}

const PatientView = styled.View`
    height: 100%;
    background: #fff;
`

const PatientAppointmentsText = styled.Text`
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
    margin-bottom: 12px;
`

const Container = styled.View`
    padding: 25px
`

const PatientAppointments = styled(Container)`
    background: #F8FAFD;
    height: 100%;
`

const CallBtn = styled.TouchableOpacity`
    background: #84D269;
    border-radius: 66px;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`

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
    flex-basis: 45px;
`

const FullName = styled.Text`
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 7px;
`


export default PatientScreen;

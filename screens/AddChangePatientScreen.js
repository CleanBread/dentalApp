import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styled from 'styled-components/native';
import PhoneInput from 'react-native-phone-input'

const AddChangePatientScreen = ({ navigation, route }) => {
    const phoneRef = React.useRef();

    const onEnter = () => {
        navigation.setOptions({ title: route.params.title })
    }

    React.useEffect(() => {
        navigation.addListener('focus', onEnter);
        return () => {
            navigation.removeListener('focus', onEnter);
        }
    }, [navigation]);

    return (
        <Container>
            <Box>
                <Label>Имя и фамлия</Label>
                <InputComp placeholder="Иван Иванов" />
            </Box>
            <Box>
                <Label>Номер телефона</Label>
                <PhoneInput initialCountry="ru" ref={phoneRef} textProps={{ placeholder: '89999999999', fontSize: '18px' }} />
            </Box>
        </Container>
    );
}

const InputComp = styled.TextInput`
    font-size: 18px;
    line-height: 21px;
    color: #303030;
`

const Label = styled.Text`
    font-size: 14px;
    line-height: 17px;
    color: #A0A2A4;
    margin-bottom: 10px;
`

const Box = styled.View`
    padding-bottom: 10px;
    border-color: #F0F0F0;
    border-bottom-width: 1px;
    margin-bottom: 25px;
`

const Container = styled.View`
    padding: 25px;
    height: 100%
    background: #fff;
`

export default AddChangePatientScreen;

import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


const AppointmentCard = () => {
    return (
        <Container>
            <Dots>
                <DotsImg source={require('../assets/img/dots.png')} />
            </Dots>
            <Item>
                <ItemImg source={require('../assets/img/tooth.png')} />
                <ItemText>Зуб: </ItemText>
                <ItemTextBold>12</ItemTextBold>
            </Item>
            <Item>
                <ItemImg source={require('../assets/img/diagnosise.png')} />
                <ItemText>Диагноз: </ItemText>
                <ItemTextBold>пульпит</ItemTextBold>
            </Item>
            <ItemBtns>
                <ItemDate>
                    <ItemButtonText>11.10.2019 - 15:40</ItemButtonText>
                </ItemDate>
                <ItemPrice>
                    <ItemButtonTextLime>1500 Р</ItemButtonTextLime>
                </ItemPrice>
            </ItemBtns>
        </Container>
    );
}

const Dots = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    width: 3px;
    height: 16px;
    right: 20px;
`

const DotsImg = styled.Image`
    width: 3px;
    height: 16px;
`

const ItemText = styled.Text`
    font-size: 16px;
    line-height: 19px;
`
const ItemTextBold = styled(ItemText)`
    font-weight: 700;
`

const ItemButtonText = styled(ItemTextBold)`
    font-size: 14px;
    line-height: 17px;
    color: #fff;
`
const ItemButtonTextLime = styled(ItemButtonText)`
    color: #61BB42;
`

const ItemPrice = styled.View`
    background: rgba(132, 210, 105, 0.21);
    border-radius: 18px;
    padding :8px 15px;
`

const ItemDate = styled.View`
    background: #4294FF;
    border-radius: 18px;
    padding: 8px 20px;
`

const ItemBtns = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


const ItemImg = styled.Image`
    width: 13px;
    height: 15px;
    margin-right: 10px;
`

const Item = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`

const Container = styled.View`
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    padding: 20px;
    position: relative;
`

export default AppointmentCard;

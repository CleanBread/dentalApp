import React from 'react';
import styled from 'styled-components/native';

export default styled.TouchableOpacity`
    background: ${props => props.bg ? props.bg : '#2A86FF'};
    width: ${props => props.width};
    height: ${props => props.height};
    borderRadius: 40;
`
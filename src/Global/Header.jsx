import React from 'react';
import { styled } from '@material-ui/styles';

const HeaderDiv = styled('div')({
  background: 'linear-gradient(180deg, rgba(44,56,126,1) 0%, rgba(255,145,0,1) 100%)',
  height: '100vh',
  border: 'none',
  color: 'white'
});

export default function Header() {
  return (
    <HeaderDiv>
      {/* <h1>Rogger's ScheeCast</h1> */}
    </HeaderDiv>);
}
import React from 'react'
import styled from 'styled-components'
import AnimatedBG from './AnimatedBG'

const HeaderDiv = styled.div`
  background: linear-gradient(180deg, rgba(44,56,126,1) 0%, rgba(255,145,0,1) 100%);
  height: 100vh;
  border: none;
  color: white;
`

const Header = () => {
  return (
    <div>
      <AnimatedBG speed="15s" height="500px"/>
      {/* <HeaderDiv /> */}
    </div>
  )
}

export default Header;
import React, {useState} from 'react'
import {
    Flex,
    IconButton,
    Image,
    Spacer,
    Stack,
    Button
  } from '@chakra-ui/react'
import { Link, useRouteMatch } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Nav = ({webLinks = [{ name: 'Nosotros', path: '/nosotros' }]}) => {
    const activeTextColor = '#5ccb5f'
    //states
    const [display, changeDisplay] = useState('none')

    
    let itemsNav = webLinks.map((link, index) => (
        <Active
            key={index}
            activeOnlyWhenExact={true}
            to={link.path}
            label={link.name}
            activeTextColor={activeTextColor}
        />
    ))
    return (
        <Stack bgColor="#111" color="#fff" py="5px">
        <Flex alignItems="flex-center">
          
          <Link to='/' >
              <Image
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png'}
                alt={'texto alternativo'}
                maxW='5rem'
                ml={1}
                mr={3}
                borderRadius={'5px'}
                maxh='30px'
                fallbackSrc='https://via.placeholder.com/150'
              />
          </Link>
          <Spacer />
          <Flex display={['none', 'none', 'flex', 'flex']} mr="0">
            {itemsNav}          
          </Flex>
          <Flex m={2} p={2}>
            <IconButton
              aria-label='Open Menu'
              size='lg'
              mr={2}
              my={3}
              color={"#5ccb5f"}
              bgColor={"#888"}
              icon={<HamburgerIcon />}
              display={['flex', 'flex', 'none', 'none']}
              onClick={() => changeDisplay('flex')}
            />
          </Flex>
          <Flex
            w='100vw'
            bgColor={'gray'}
            zIndex={20}
            h='100vh'
            pos='fixed'
            top='0'
            left='0'
            overflowY='auto'
            flexDir='column'
            display={display}
          >
            <Flex justify='flex-end'>
              <IconButton
                aria-label='Close Menu'
                mt={3}
                mr={3}
                size='md'
                color={"#5ccb5f"}
                icon={<CloseIcon />}
                onClick={() => changeDisplay('none')}
              />
            </Flex>
            <Flex 
            flexDir='column' 
            align='center' 
            onClick={() => changeDisplay('none')}
            >
              <Active
                activeOnlyWhenExact={true}
                to='/'
                label="Home"
                activeTextColor={activeTextColor}
              />
              {itemsNav}
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    )
}

const Active = ({ activeOnlyWhenExact, to, label, activeTextColor }) => {
    let activeMatch = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    })
    if (activeMatch) {
      return (
        <Link to={to}>
          <Button colorScheme="white"  align="center" my={3} w='100%' color={activeTextColor}>
            {label}
          </Button>
        </Link>
      )
    } else {
      return (
        <div>
          <Link to={to}>
            <Button colorScheme="white"  my={3} w='100%'>
              {label}
            </Button>
          </Link>
        </div>
      )
    }
  }


export default Nav

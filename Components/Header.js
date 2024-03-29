import React, { useState, useContext } from 'react';
import { Flex, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button, useDisclosure, HStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image'; 
import DarkModeSwitch from './DarkModeSwitch';
import NextLink from 'next/link';
import {SocialIcon } from 'react-social-icons';
import styles from '../styles/Home.module.scss';
import { motion } from "framer-motion"

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    

    <Flex
      p={1}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bgColor='black'
    >
    <Flex>  
      <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
        <a href="/">  
        <Image
        src="/Josh_Logo_White.png"
        alt="Author Logo"
        width={45}
        height={45} />
        </a>
      </motion.div>
      <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
        <DarkModeSwitch/>
        </motion.div>
    </Flex>

             
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
        >
          <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <Button ref={btnRef} bgColor="teal" onClick={onOpen} alignSelf="flex-end">
          <HamburgerIcon/>
          </Button>
          </motion.div>
      
          <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='3xl'>Menu</DrawerHeader>

          <DrawerBody>
            <Flex flexDir="column" alignContent="flex-start" >
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/About" passHref>
                <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
                  About
                </Button>
              </NextLink>
              <NextLink href="/gpt3-demo" passHref>
                <Button as="a" variant="ghost" aria-label="gpt3" my={5} w="100%">
                  Chat GPT 3 Demo
                </Button>
              </NextLink>
              <NextLink href="/Contact" passHref>
                <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
                  Contact
                </Button>
              </NextLink>
              <NextLink href="/index.html" passHref>
                <Button as="a" variant="ghost" aria-label="Game" my={5} w="100%">
                  Contact
                </Button>
              </NextLink>
              <NextLink href="/More" passHref>
                <Button as="a" variant="ghost" aria-label="More" my={5} w="100%">
                  More
                </Button>
              </NextLink>
              <NextLink href="https://jdaphotophile.vercel.app/" passHref>
                <Button as="a" variant="ghost" aria-label="Photography" my={5} w="100%">
                  Photography
                </Button>
              </NextLink>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
          
          <footer className={styles.footer}>
            <HStack>
              
            ReactDOM.render(<SocialIcon url="https://twitter.com/JDaMusicophile"/>, document.body);
            ReactDOM.render(<SocialIcon url="https://www.instagram.com/j_damusicophile/"/>, document.body);
            ReactDOM.render(<SocialIcon url="https://www.facebook.com/JDaMusicophile/"/>, document.body);
            ReactDOM.render(<SocialIcon url="https://github.com/JDaMusicophile"/>, document.body);

            </HStack>
            
          </footer>
         
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      
      
      </Flex>     

      
      
    </Flex>
  );
};

export default Header;
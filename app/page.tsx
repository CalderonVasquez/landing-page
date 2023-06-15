import Image from 'next/image'
import styles from './page.module.css'
import { Button, Container, Navbar, Text } from '@nextui-org/react'


export default function Home() {
  return (
    <Container>

      {/* Navbar */}
      <Navbar isCompact variant={'static'}>
        <Navbar.Brand>
          <Text b color='inherit'>
            LearnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn={"md"}>
          <Navbar.Link href='#'>Learning Platform</Navbar.Link>
          <Navbar.Link href='#'>Community</Navbar.Link>
          <Navbar.Link href='#'>Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href='#'>Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href='#'>
              Sign up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      {/* Jumbotron */}

      {/* 3 displaying product cards */}


    </Container>
  )
}

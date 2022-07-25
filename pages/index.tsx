import { Heading, Stack, Divider, HStack} from '@chakra-ui/react'

import type { NextPage } from 'next'
import style from '../styles/index.module.css';
import Navigation from '../components/navigation';
import NavBar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div>
      <NavBar
        links={[{
          goto: '/',
          name: 'Internship Program'
        }]}
      />
      <div className={style.CenteredVertical}>
        <Stack spacing='32px'>
          <Heading textAlign='center'>Internship Program</Heading>
          <Divider />
          <HStack spacing='32px'>
            <Navigation
              goto='/change-title'
              title='Title Transformer'
              description='A simple title transformation panel' />
            <Navigation
              goto='/fetching'
              title='User Fetcher'
              description='A simple API fetching and rendering process' />
          </HStack>
        </Stack>
      </div>
    </div>
  )
}

export default Home
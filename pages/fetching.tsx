import { Heading, Stack, Box, Text, Button, Divider, Avatar, Skeleton, SkeletonText } from '@chakra-ui/react'
import type { NextPage } from 'next'
import style from '../styles/index.module.css';
import NavBar from '../components/navbar';
import { useEffect, useState } from 'react';
import UserSkeleton from '../components/userSkeleton';
import UserBox from '../components/userBox';

const Fetching: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({
    name: {
      first: '',
      last: ''
    },
    email: '',
    picture: {
      large: ''
    },
    nat: '',
    dob:{
      date: '',
      age: ''
    },
    gender: '',
  });

  function handleFetch() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then(res => res.json())
      .then(res => {
        setData(res.results[0]);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
      }
      );
  }


  return (
    <div>
      <NavBar
        links={[{
          goto: '/',
          name: 'Internship Program'
        }, {
          goto: '/fetching',
          name: 'User Fetcher'
        }]}
      />
      <div className={style.CenteredVertical}>
        <Stack spacing='8'>
          <Heading textAlign='center'>User Fetcher</Heading>
          <Divider />
          <Box paddingY={6}>
            {(data.name.first == '')&&<UserSkeleton/>}
            {(data.name.first != '')&&<UserBox 
            firstName={data.name.first}
            lastName={data.name.last}
            email={data.email}
            avatar={data.picture.large}
            gender={data.gender}
            nationality = {data.nat}
            age={data.dob.age}
            />}
          </Box>
          <Divider />
          <Button onClick={handleFetch} isLoading={loading}>
            {(data.name.first == '')? 'Fetch User': 'Refetch User'}
          </Button>
        </Stack>
      </div>
    </div>
  )
}

export default Fetching

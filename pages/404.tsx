import { Heading, Stack, Divider, Text, Button } from '@chakra-ui/react'

import type { NextPage } from 'next'
import style from '../styles/index.module.css';
import NavBar from '../components/navbar';
import Link from 'next/link';

const NotFound: NextPage = () => {
    return (
        <div>
            <NavBar
                links={[{
                    goto: '/',
                    name: 'Internship Program'
                }, {
                    goto: '/404',
                    name: 'Error Not Found'
                }]}
            />
            <div className={style.CenteredVertical}>
                <Stack spacing='32px'>
                    <Heading textAlign='center'>404 : Not Found</Heading>
                    <Divider />
                    <Text>The page you requested is not found.</Text>
                    <Link href='/'>
                        <Button>Go to Homepage</Button>
                    </Link>
                </Stack>
            </div>
        </div>
    )
}

export default NotFound
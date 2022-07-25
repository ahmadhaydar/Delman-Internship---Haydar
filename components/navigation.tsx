import { Heading, Stack, Divider, Box, Button, HStack, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'

function Navigation(props: {
    goto: any,
    title: string,
    description: string,
}) {
    return (
        <Box boxShadow='md' w='270px' h='150px' borderWidth='1px' borderRadius='sm' padding='5'>
            <Link href={props.goto}>
                <Button variant='link' colorScheme='black'>
                    <Heading as='h2' size='md'>{props.title} <ArrowForwardIcon w={4} h={4} /></Heading>
                </Button>
            </Link>
            <Text marginTop='1em'>
                {props.description}
            </Text>
        </Box>
    );
}

export default Navigation;
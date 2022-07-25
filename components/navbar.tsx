import { Divider, HStack, Flex, Text, Spacer } from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import Link from 'next/link';

function NavBar(props: {
    links: {
        goto: any,
        name: string,
    }[],
}) {
    return (
        <Flex padding='1em' height='55px' width='100%' position='absolute' direction='row' align='center'>
            <HStack spacing='5'>
                <Text fontSize='2xl' marginTop='-1'>delman.io</Text>
                <Spacer>
                    <Divider orientation='vertical' />
                </Spacer>
                <Breadcrumb>
                    {props.links.map((link, index) => {
                        return (
                            <BreadcrumbItem key={index}>
                                <Link href={link.goto}>
                                    <BreadcrumbLink>{link.name}</BreadcrumbLink>
                                </Link>
                            </BreadcrumbItem>)
                    })}
                </Breadcrumb>
            </HStack>
        </Flex>
    );
}

export default NavBar;
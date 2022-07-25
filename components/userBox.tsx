import { HStack, Stack, Box, Avatar, Text, Spacer } from '@chakra-ui/react'

function UserBox(props: any) {
    return (
        <Box
            boxShadow='2xl'
            w='270px'
            h='300px'
            borderRadius='md'
            borderWidth='1px'
            borderColor={(props.gender == 'female') ? 'pink.100' : 'blue.100'}>
            <Stack align='center' padding='8'>
                <Avatar w="24" h="24" src={props.avatar}/>
                <Stack spacing={5}>
                    <Stack align={'center'}>
                        <Text as='h2' fontSize='lg' fontFamily={'body'} fontWeight='500'>
                            {props.firstName} {props.lastName}
                        </Text>
                        <Text color='gray'>{props.email}</Text>
                    </Stack>
                    <HStack justify={'center'} spacing='6'>
                        <Stack w='85px' align={'center'} spacing='1'>
                            <Text fontFamily={'body'} fontWeight='600'>{props.nationality}</Text>
                            <Text color='gray' fontSize={'sm'}>Nationality</Text>
                        </Stack>
                        <Spacer />
                        <Stack w='85px' align={'center'} spacing='1'>
                            <Text fontFamily={'body'} fontWeight='600'>{props.age}</Text>
                            <Text color='gray' fontSize={'sm'}>Age</Text>
                        </Stack>
                    </HStack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default UserBox;
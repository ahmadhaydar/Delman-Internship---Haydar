import { Heading, Stack, Divider, HStack, Text, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import style from '../styles/index.module.css';
import NavBar from '../components/navbar';
import { useEffect, useState } from 'react';

function TitleText(props: {
  randomized: boolean,
  index: number,
}) {
  let [color, setColor] = useState('#1a202c');

  function setRandomColor() {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  }

  useEffect(() => {
    if (props.randomized) {
      const interval = setInterval(() => {
        setRandomColor()
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setColor('#1a202c');
    }
  }, [props.randomized]);

  return (
    <Heading textAlign='center' color={color}>Internship Program - {props.index}</Heading>
  );
}

const ChangeTitle: NextPage = () => {
  let [count, setCount] = useState(1);
  let [timer, setTimer] = useState(0);
  let [randomized, setRandomized] = useState(false);

  function toggleRandom() {
    setRandomized(!randomized);
  }

  useEffect(() => {
    if (randomized) {
      const interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimer(0);
    }
  }, [timer, randomized]);

  return (
    <div>
      <NavBar
        links={[{
          goto: '/',
          name: 'Internship Program'
        }, {
          goto: '/change-title',
          name: 'Title Transformer'
        }]}
      />
      <div className={style.CenteredVertical}>
        <Stack spacing='8'>
          {[...Array(count)].map((_, index) => {
            return (<TitleText key={index} randomized={randomized} index={index + 1}/>);
          })}
          <Stack alignItems={'center'} spacing={2.5}>
            <Divider />
            <HStack>
              <Text>Running for: {timer}s</Text>
              <Divider orientation='vertical' />
              <Text>Title count: {count}</Text>
            </HStack>
            <Divider />
            <HStack spacing={8}>
              {!randomized && <Button onClick={toggleRandom}>Randomize Color</Button>}
              {randomized && <Button onClick={toggleRandom}>Clear Color</Button>}
              <Button onClick={() => setCount(count + 1)} isDisabled={(count === 5)}>Add title</Button>
              <Button onClick={() => setCount(count - 1)} isDisabled={(count === 1)}>Remove title</Button>
            </HStack>
          </Stack>
        </Stack>
      </div>
    </div>
  )
}

export default ChangeTitle

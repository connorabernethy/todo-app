import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.card}>Todo List!</div>
      <FormControl className={styles.container}>
        <Input type='email' placeholder='What needs to get done?' className={styles.input}/>
      </FormControl>
    </div>
  )
}

export default Home

import React from 'react';
import { Input, Stack, Textarea, Button    } from '@chakra-ui/react'

import styles from './contact.module.scss'

function Form(props) {
    return (
        <div>
              <form action="">
                    <Stack spacing={7}>
                     <Input className={styles.input} variant='filled' placeholder='Your Name'   size='lg'/>
                     <Input className={styles.input} variant='filled' placeholder='Your email'  size='lg' />
                     <Input className={styles.input} variant='filled' placeholder='Subject'  size='lg'/>
                     <Textarea className={styles.text_area} placeholder='Here is a sample placeholder' size='lg' />
                    <div styles={{width:'100px'}}>
                     <Button colorScheme='messenger' size='lg'>Send Message</Button>

                    </div>
                </Stack>
                    </form>
        </div>
    );
}

export default Form;
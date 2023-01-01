import React from 'react';
import { Input, Stack, Textarea, Button    } from '@chakra-ui/react'
// import * as Yup from yup
import styles from './contact.module.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup'


function Form(props) {
    const MessageSubmit=()=>{
        return Yup.object({
            name:Yup.string().required('Please let us know youer name'),
            email:Yup.string().required('email is required'),
            subject:Yup.string().required('subjec is required'),
            message:Yup.string().required('message is required'),
            
        })
    }




    const formik= useFormik({
        initialValues:{
            name:'',
            email:'',
            subject:'',
            message:'',
        },
        validationSchema:MessageSubmit(),

        onSubmit:(values)=>{
            console.log(values);
            formik.handleReset();
        }






    })
// console.log(formik.values);
    return (
        <div>
              <form 
              onSubmit={formik.handleSubmit}>
                    <Stack spacing={7}>
                        <div>
                     <Input 
                          name="name"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={styles.input} 
                          variant='filled' placeholder='Your Name'   size='lg'/>
                       
                       {
                    formik.touched.name && formik.errors.name &&
                    <p className={styles.errorMsg}>{formik.errors.name}</p>
                }
                        </div>

                        <div>

                     <Input onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.email} name='email' className={styles.input} variant='filled' placeholder='Your email'  size='lg' />
                     {
                    formik.touched.email && formik.errors.email &&
                    <p className={styles.errorMsg}>{formik.errors.email}</p>
                }
                        </div>

                        <div>
                     <Input onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.subject} name='subject' className={styles.input} variant='filled' placeholder='Subject'  size='lg'/>
                     {
                    formik.touched.subject && formik.errors.subject &&
                    <p className={styles.errorMsg}>{formik.errors.subject}</p>
                }
                        </div>

                        <div>
                     <Textarea onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.message}  name='message' className={styles.text_area} placeholder='Here is a sample placeholder' size='lg' />
                     {
                    formik.touched.message && formik.errors.message &&
                    <p className={styles.errorMsg}>{formik.errors.message}</p>
                }
                        </div>
                   
                    <div className={styles.btn} styles={{width:'100px'}}>
                     <Button type='submit' colorScheme='messenger' size='lg'>Send Message</Button>

                    </div>
                </Stack>
                    </form>
        </div>
    );
}

export default Form;
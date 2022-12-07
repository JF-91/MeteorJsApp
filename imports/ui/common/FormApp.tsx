import { Box, Button, Stack, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { FC } from 'react'
import * as yup from 'yup'

interface state {
    name: string;
    lastName: string;
    email: string;
    info: string;
}[]

export interface PropEventForm{
    updateForm: (e:state)=> void
}


const shapYupValidate = yup.object({
    name: yup
        .string()
        .max(15,'max 15 character')
        .required('name is required'),
    lastName: yup
        .string()
        .max(25,'max 25 character')
        .required('name is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    info: yup
    .string()
    .min(15,'min 15 character')
    .required('name is required'),
})

export const FormApp:FC<PropEventForm> = ({updateForm}) => {

    const formik = useFormik({
        initialValues:{
            name:"",
            lastName:"",
            email:'',
            info:"",
        },
        onSubmit: (values:state)=>{;

            updateForm(values)

            
            
        },
        validationSchema: shapYupValidate
    })

  return (
    <Box component='form' onSubmit={formik.handleSubmit}>
        <Stack direction='column' spacing={2} >

        <TextField name='name'  label='Name' onChange={formik.handleChange} />
        <TextField name='lastName'  label='Last Name' onChange={formik.handleChange} />
        <TextField name='email'  label='Email' onChange={formik.handleChange} />
        <TextField name='info'  label='Your comment' onChange={formik.handleChange} />
        <Button type='submit' variant='contained' fullWidth color='secondary'>Submit</Button>
        </Stack>
    </Box>
  )
}

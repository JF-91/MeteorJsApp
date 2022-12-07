import { Box, Container, Typography, Stack, Paper } from '@mui/material'
import React, { FC, useState } from 'react'
import { FormApp } from '../common/FormApp'
import { FormCollection } from '/imports/api/FormCollection'

interface state {
    name: string;
    lastName: string;
    email: string;
    info: string;
}[]


export const Register:FC<{}> = () => {

    const [data, setData] = useState<state | undefined>()

    const [getMongo, setGetMongo] = useState<Array<string>>([""])


   
   
    
    

  return (
    <Container>
        <Box component='div' marginTop={4} display='flex' alignItems='center' justifyContent='center'>
            <Stack direction='column' spacing={3}>

                <Typography color='grey' variant='h6'>Contact me</Typography>
                <Paper sx={{padding:'2.5em', maxWidth:'50em', borderRadius:'1.5em'}} elevation={16}>
                    <FormApp updateForm={setData}/>
                </Paper>
            </Stack>

        </Box>

    </Container>
  )
}

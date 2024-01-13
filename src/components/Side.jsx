import React from 'react'
import {Grid,Card,CardContent,Typography} from '@mui/material'
import Container from '@mui/material/Container'
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

function Side() {
  return (
    <div className='sm:flex'>
      <div className='flex m-4 p-6 border-2 overflow-x-auto rounded-lg shadow-xl'>
          <div className='flex gap-10 text-sm items-center sm:grid'>
            <a href="#" className='bg-black text-white px-4 py-2 rounded border-2  border-transparent hover:border-black hover:bg-white hover:text-black'>ALL</a>
            <a href="#" className=' border-2 border-transparent hover:border-black px-4 py-2 rounded'>Burger</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Breakfast</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Lunch</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Dinner</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Pizza</a>
          </div>
      </div>
      <Grid container spacing ={3}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Lizard
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Br 101
                </Typography>
              </CardContent>
            </CardActionArea> 
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Lizard
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Br 101
                </Typography>
              </CardContent>
            </CardActionArea> 
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Lizard
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Br 101
                </Typography>
              </CardContent>
            </CardActionArea> 
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Lizard
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Br 101
                </Typography>
              </CardContent>
            </CardActionArea> 
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Side
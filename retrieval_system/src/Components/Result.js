import * as React from "react";
import { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, ImageList, ImageListItem, ImageListItemBar, IconButton, Box, Modal} from '@mui/material';

const Result = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const showResults = itemData.map((item, index) => {
        return (
            <Box
                key={index}
                sx={{
                    border: "4px solid",
                    borderColor: "white",
                    pointerEvents: "all",
                    cursor: "pointer",
                }}
                onClick={() => handleImageClick(item.img)}
            >
                <ImageListItem>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          objectFit: 'cover',
                          maxWidth: '100%',
                          maxHeight: '100%',
                        }}
                    />
                    <ImageListItemBar
                        title={item.title}
                        style={{
                          opacity: "1",
                          color: "white",
                          fontSize: '100px'
                        }}
                    />
                </ImageListItem>
                
                
            </Box>
        );
    });

    return (
        <Container style={{ padding: "20px" }} maxWidth={true}>
            <ImageList cols={6} rowHeight={200} sx={{ overflow: "hidden"}}>
                {showResults}
            </ImageList>

            {/* Modal hiển thị ảnh phóng to */}
            <Modal
                open={selectedImage !== null}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography variant="h6" style={{ position: 'absolute', top: '0', left: '0', color: 'white', padding: '10px' }}>
                            {itemData.find(item => item.img === selectedImage)?.title}
                        </Typography>
                        <img
                            src={selectedImage}
                            alt="Selected Image"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    </Box>
                </div>
            </Modal>
        </Container>
    );
};


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];

  export default Result;
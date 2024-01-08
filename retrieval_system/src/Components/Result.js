import * as React from "react";
import { useState, useEffect  } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, ImageList, ImageListItem, ImageListItemBar, IconButton, Box, Modal} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { handleSearchClick } from './InputBar'

const Result = ({data}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [image_data, setImageData] = useState(null);
    
    useEffect(() => {
        // Your logic to handle the data changes
        console.log('Effect: Data changed', data);
        setImageData(data);
      }, [data]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    if (!image_data || !image_data.result_paths || !Array.isArray(image_data.result_paths)) {
      return null; // or handle the error in a way that makes sense for your application
    }
    else
    {
        console.log('Data from API: ', image_data);
    }

    const showResults = image_data.result_paths.map((item, index) => {
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
                        srcSet={item.img}
                        src={item.img}
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
                            {data.result_paths.find(item => item.img === selectedImage)?.title}
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

export default Result;
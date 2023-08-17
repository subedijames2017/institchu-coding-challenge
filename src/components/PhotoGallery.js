import React, { useState, useEffect } from 'react';
import { Container,Card, Col, Row } from 'react-bootstrap';
import { getPhotosByAlbumId } from '../service';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const albumId = 1; 

  useEffect(() => {
    async function fetchPhotos() {
      try {
        // fetching photos from api for albub 1 only
        const photosData = await getPhotosByAlbumId(albumId);
        setPhotos(photosData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, [albumId]);

  return (
    <Container fluid="md">
    <Row>
    {photos.map((photo) => (
        <Col key={photo.id} md={4} className='mt-2'>  
        <Card>
          <Card.Img variant="top" src={photo.url} />
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
          </Card.Body>
        </Card>
        </Col>
    ))}
  </Row>
  </Container>
  );
}

export default PhotoGallery;

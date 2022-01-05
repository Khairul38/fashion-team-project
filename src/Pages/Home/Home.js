import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts/useProducts';
import './Home.css';
import { Box, CircularProgress } from '@mui/material';
import ReviewItem from '../Item/ReviewItem';
import ProductItem from '../Item/ProductItem';
import useReviews from '../../Hooks/useReviews/useReviews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import FutureWrapper from '../FutureWrapper/FutureWrapper';

const Home = () => {
    const { products, loading } = useProducts();
    const newProducts = products.slice(0, 6)
    const { reviews } = useReviews();

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', my: 50 }}>
            <CircularProgress size={150} sx={{ color: '#FF6C27' }} />
        </Box>
    }

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container">
                <div data-aos="fade-up" className="my-5 text-center">
                    <h1 className="fw-bold">MOST POPULAR <span className="text-color">PRODUCTS</span> </h1>
                    <h5>SELECT THE BEST PRODUCT FOR YOU</h5>
                </div>
                {loading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
                        <CircularProgress sx={{ color: '#FF6C27' }} />
                    </Box>
                    : <div className="container">
                        <Row xs={1} md={2} lg={3} className="g-5 mb-5 p-4">
                            {
                                newProducts.map(product => <ProductItem key={product._id} product={product}></ProductItem>)
                            }
                        </Row>
                    </div>}
            </div>
            <FutureWrapper></FutureWrapper>
            <div className="container">
                <div data-aos="fade-up" className="my-5 text-center">
                    <h1 className="fw-bold">CUSTOMER <span className="text-color">REVIEWS</span></h1>
                    <h5>YOUR FEEDBACK OUR INSPIRATION</h5>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={2} lg={3} className="g-5 p-4">
                        {
                            reviews.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                        }
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
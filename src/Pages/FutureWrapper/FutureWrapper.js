import React from 'react';

const FutureWrapper = () => {
    return (
        <div className="px-5 py-3">
            <hr />
            <div className="row row-cols-2 row-cols-md-3 g-4 mx-auto mt-0 ">
                <div className="col d-flex">
                    <div className="icon">
                        <i className="fas fa-shipping-fast text-danger fs-1 me-4"></i>
                    </div>
                    <div className="text-start">
                        <h6 className="text-danger">Free Shipping</h6>
                        <p className="text-muted"><small>Free shipping on order</small></p>
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="icon">
                        <i className="fas fa-headset text-danger fs-1 me-4"></i>
                    </div>
                    <div className="text-start">
                        <h6 className="text-danger">Support 24/7</h6>
                        <p className="text-muted"><small>Contact us 24 hrs a day</small></p>
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="icon">
                        <i className="far fa-credit-card text-danger fs-1 me-4"></i>
                    </div>
                    <div className="text-start">
                        <h6 className="text-danger">Payment Secure</h6>
                        <p className="text-muted"><small>Free shipping on order</small></p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default FutureWrapper;
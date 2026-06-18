import { useState } from "react";
import data from "../data/dashboardData.json";
import "./SignalDetails.css";

function SignalDetails() {

    const [quantity, setQuantity] = useState(50);
    
    return (
        <div className="details-page">

            <h1 className="page-title">
                Signal Details & Order
            </h1>

            <div className="details-card">

                <div className="signal-header">

                    <h2>{data.signal.symbol}</h2>

                    <span className="buy-badge">
                        {data.signal.action}
                    </span>

                </div>

                <h3 className="signal-price">
                    {data.signal.price}
                </h3>

                <div className="graph-placeholder">
                    Graph Area
                </div>

                <div className="signal-details">
                    <div className="detail-row">
                         <span>Entry Price</span>
                         <span>{data.signal.entryPrice}</span>
                     </div>
                     <div className="detail-row">
                         <span>Target 1</span>
                         <span>{data.signal.target1}</span>
                     </div>
                     <div className="detail-row">
                         <span>Target 2</span>
                         <span>{data.signal.target2}</span>
                     </div>
                     <div className="detail-row">
                         <span>Stop Loss</span>
                         <span>{data.signal.stopLoss}</span>
                     </div>
                     <div className="detail-row">
                         <span>Confidence</span>
                         <span>{data.signal.confidence}</span>
                     </div>
                </div>

                <div className="quantity-section">
                    <span>Quantity</span>
                    <span className="quantity-controls">
                        <button onClick={() => {
                            if(quantity > 1){
                                setQuantity(quantity - 1);
                            }
                        }}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </span>
                </div>

                <div className="product-section">
                    <span>Product</span>
                    <select>
                        <option>MIS</option>
                    </select>
                </div>
                <div className="order-section">
                    <span>Order Type</span>
                    <select>
                        <option>MARKET</option>
                    </select>
                </div>

                <button className="place-order-btn">
                    Place Order
                </button>

            </div>

        </div>
    );
}

export default SignalDetails;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/dashboardData.json";
import "./ConfirmOrder.css";

function ConfirmOrder() {
    const navigate = useNavigate();
    const orderData = data.orderConfirmation;

    const handleConfirmOrder = () => {
        navigate("/order-placed");
    };

    const handleCancel = () => {
        navigate("/signal-details");
    };

    return (
        <div className="confirm-order-page">
            <div className="confirm-order-card">
                <h2 className="card-title">Confirm Order</h2>

                <div className="order-details">
                    <div className="order-symbol-header">
                        <h3 className="symbol-name">{orderData.symbol}</h3>
                        <span className="action-badge">{orderData.action}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Qty</span>
                        <span className="info-value">{orderData.quantity}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Order Type</span>
                        <span className="info-value">{orderData.orderType}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Product</span>
                        <span className="info-value">{orderData.product}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Entry Price (Est.)</span>
                        <span className="info-value">{orderData.entryPrice}</span>
                    </div>

                    <div className="order-divider"></div>

                    <div className="order-info-row total-amount">
                        <span className="info-label">Total Amount (Est.)</span>
                        <span className="info-value">{orderData.totalAmount}</span>
                    </div>

                    <div className="order-note">
                        <span className="note-icon">ℹ</span>
                        <span className="note-text">Order will be placed via your connected broker account using API.</span>
                    </div>
                </div>

                <div className="button-group">
                    <button className="confirm-btn" onClick={handleConfirmOrder}>
                        Confirm & Place Order
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOrder;

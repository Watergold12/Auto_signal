import './BrokerLogin.css'

function BrokerLogin() {
    return(
        <div className="broker-page">

            <h1 className='broker-title'>Broker Login</h1>

            <p>
                Login to your broker account
                to connect and trade
            </p>

            <div className="broker-card">
                <img src="https://www.tradesmartonline.in/images/logo.png" alt="TradeSmart Logo" />
            </div>

            <p>
                We never store your credentials.
                Secure API integration via broker.
            </p>

        </div> 
    )
}

export default BrokerLogin;
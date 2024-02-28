import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container"> 
                <img className="logo" src='https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c8/26/95/c82695e7-bda5-c9fc-3a23-6f3b8fdb302a/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png' alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li >
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const styleCard = {
    backgroundColor :"orange",
}
 

const Restocard = (props)=>{
    console.log(props)

    return(
        <div className="restocard" style={styleCard}>
             <img className='res-img' alt='logo' src="https://w.forfun.com/fetch/42/42a91f276a7e9a7e5f1b60d811a28daa.jpeg" />
             <h3>{props.resName}</h3>
              <h2>{props.cusine }</h2>
              <h3>4.3</h3>
       
       
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">

            <div className="search">
             search
            </div>
            <div className="res-container" >

      <Restocard resName='burger' cusine='burger , fast food' />
      <Restocard resName='biriyani'  cusine='burger , fast food'   />
    

            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
          

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)

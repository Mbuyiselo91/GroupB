import React from 'react'
import '../pages/GiftCard.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

// import {buy, checkw} from './GiftData'

function GiftCard() {
  return (
    <div>


<div id="coupon_html" style={{margin: "0 auto", width: "720px", height: "400px", position: "relative", display: "block"}}>
  <div style={{position: "absolute" ,top: "10px" ,left: "10px" ,width: "320px" ,height: "480px", background:" #FFF"}}>  
  <div style={{position: "absolute", top: "10px", left: "10px", width: "300px", height: "460px", border: "3px double #7A0700", background: "#FFF"}}>
    <img src="https://www.moocommerce.co.za/moodle33/local/imoocommerce/pix/coupons/curl1.png" alt=""/>
    <div style={{position: "absolute", top: "0", left: "0", width: "250px", fontsize: "80px", color: "#000", textalign: "right"}}>R150</div>    
  <div style={{position: "absolute", top: "75px", left: "240px", fontsize: "18px", color: "#000"}}>OFF</div>      
  <div style={{position: "absolute", top: "100px", width: "100%", fontsize: "80px", textalign: "center", color: "#7A0700"}}>Only!</div>    
  <div id="cmessage" style={{position: "absolute", top: "240px", width: "100%" ,textalign: "center", color:"#000", fontsize: "18px"}}>Your message will go here.</div>    
  <div style={{position: "absolute", top: "380px", width: "100%", background: "#7A0700", fontsize: "18px", lineheight: "2", textalign: "center",color: "#FFF"}}>ONLINE CODE: <a href="https://www.moocommerce.co.za/moodle33/local/imoocommerce/index.php">ONLINE</a></div>    
    <div style={{position: "absolute", top: "430px", margin: "0 auto", width: "100%", fontsize: "14px", fontweight: "600", textalign: "center", color: "#000"}}>This coupon expired on: 2023-09-27</div>  
    </div>
    </div>
</div>


{/* <div class="card-body">
  <div class="line-1">
    <h2>Amazon.com</h2>
    <h4>Gift Card</h4>
    <i class="fa fa-long-arrow-right"></i>
    <span class="char">a</span>
  </div>
  
  <div class="line-2">
    <span class="num">R100</span>
  </div>
</div> */}



      {/* <div className="wrapper">
        <div className="giftcard">
          <div className="card">
            <div className="back">
              <section className="detail">
                <div className="list">
                  <p className="title">Your order will be shipped to:</p>
                  <p></p>
                  <p className="name">Bathande</p>
                  <p className="addr">he Media Mill, 7 Quince St </p>
                  <p className="addr">Auckland Park, Johannesburg, 2000</p>
                  <p></p>
                  <p className="tip">Available to ship: 1 business day</p>
                </div>
              </section>
              <section className="operation">
                <div className="gift">
                  <div className="btn-fr">
                    <div className="gmask"></div>
                    <div className="frbelt"><span></span></div>
                    <div className="bowknot"><span></span></div>
                    <div className="knot"></div>
                  </div>
                </div>
                <input className="msg" placeholder="Enter a gift message" />
                <div className="checkout">
                  <button id="checkout" onClick={checkw} >Checkout</button>
                </div>
              </section>
            </div>
            <div className="front">
              <section className="banner">
                <div className="logo-bg">
                  <div className="wave">
                    <div className="wave-bk"><span></span></div>
                    <div className="wave-fr"><span></span></div>
                  </div>
                  <div className="logo apple"></div>
                </div>
              </section>
              <section className="info">
                <div className="list">
                  <p className="title">Gift Card</p>
                  <p className="price">R250.00</p>
                </div>
                <div className="buy">
                  <div className="btn-bk">
                    <div className="paper"></div>
                    <div className="mask"></div>
                  </div>
                  <button id="buy" onClick={buy}>Buy</button>
                  <div className="btn-fr">
                    <div className="paper"><span></span></div>
                    <div className="mask"></div>
                    <div className="bkbelt"><span></span></div>
                    <div className="gmask"></div>
                    <div className="frbelt"><span></span></div>
                    <div className="bowknot"><span></span></div>
                    <div className="knot"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div> */}


          {/* 
          
             useEffect, useState, useContext, useParam: 

             Today: Social Media App
                  =====
             -user need to register
             -user can view the post and 

            Login App
            
            FORM
            
            Plam draw:

            ...............

            Page: Login 
                  Register
                  Profile
                  Home
                  Root

                  
           After : Router page move
                  installing.... 
                  compo
                  
                  OUTLET - Pages slide, the fixn, home

                  



            
            


          
          
          
          */}


    </div>
  )
}

export default GiftCard
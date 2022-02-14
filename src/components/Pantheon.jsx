import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/LOGO.png';
import heading1 from '../assets/images/HEADING 1.png';
import MetaMask_Fox from '../assets/images/MetaMask_Fox.svg.png';
import wallet_connect from '../assets/images/wallet-connect.dcbdafe7.ico';
import coinbase from '../assets/images/coinbase.png';

const Pantheon = () => {
    return (
        <div className='bg_hero3'>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg navbar-light pt-4">
                <div className="container-fluid ">
                    <div className="logo_2  ">
                        <Link to='/'>
                            <a className="navbar-brand" href="https://zeusfinance.money/">
                                <img className="my-3" height="110px" width="160px" src={logo} alt="" />
                            </a>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="https://zeusfinance.money/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/panthen' style={{ textDecoration: "none" }}>
                                    <a className="nav-link" href="">Pantheon</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Mount-olympus' style={{ textDecoration: "none" }}>
                                    <a className="nav-link" href="">Mount Olympus</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/stack' style={{ textDecoration: "none" }}>
                                    <a className="nav-link" href="">NFT Staking</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="blank" href="https://zeus-finance-2.gitbook.io/zeus-finance-docs/">DOCS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ borderRadius: '300px', padding: '5px 30px', color: 'black' }}>Connect wallet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
            {/* HERO BACKFROUND START */}
            <div className="container hero_text ">
                <div className="row    mx-0">
                    <img className="img-fluid" style={{ marginTop: '78px' }} src={heading1} alt="" />
                </div>
                <div className="row">
                    <div className="row mx-0 content_1">
                        <div style={{ marginTop: '-38px' }} className="col-lg-5 d-flex justify-content-center align-itmes-center border_1  ">
                            <div className="content_btn  ">
                                <a className="btn fs-5 fw-bold my-5" href="https://discord.gg/87zAyeuz2d">CONTACT US <i style={{ width: '50px', height: '50px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }} className="mx-3 fas fa-arrow-right bg-white" /></a>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="col-lg-7 ">
                            <p className="text-white fs-5 fw-bold text-lg-start text-center" />
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO BACKFROUND END */}
            <section className="second_bg_image">
                {/* Second Section Start */}
                {/* Third Section End */}
                {/* MODAL */}
                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* <div style="border-style: none;" class="modal-header">
    <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div> */}
                            <div className="text-center">
                                <h5 className="modal-title fw-bolder fs-3" id="exampleModalLabel">Contact Wallet</h5>
                                <p className="fs-5    ">By connecting a wallet, you agree to Uniswap Labs' <span className="text_gold"> Terms <br /> of Service</span>  and acknowledge that you have read and <br /> understand the Uniswap <span className="text_gold">Protocol Disclaimer.</span> </p>
                            </div>
                            <div className="modal-body">
                                <div className="container mx-0 justify-content-center    ">
                                    <div className="row mx-0  my-2 row_border ">
                                        <div className="col-lg-9  ">
                                            <h5 className="my-2">MetaMask</h5>
                                        </div>
                                        <div className="col-lg-3 d-flex justify-content-end"><img className="img_plus" width="30px" src={MetaMask_Fox} alt="" /></div>
                                    </div>
                                    <div className="row mx-0 my-3 row_border">
                                        <div className="col-lg-10">
                                            <h5 className="my-2"> Walletconnect</h5>
                                        </div>
                                        <div className="col-lg-2 d-flex justify-content-end"><img className="img_plus" width="30px" src={wallet_connect} alt="" /></div>
                                    </div>
                                    <div className="row mx-0 my-3 row_border">
                                        <div className="col-lg-10">
                                            <h5 className="my-2"> Coinbase Wallet</h5>
                                        </div>
                                        <div className="col-lg-2 d-flex justify-content-end"><img className="img_plus" width="60px" src={coinbase} alt="" /></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-1" />
                                        <div className="col-lg-6">
                                            <h6><span className="text_gold">!</span>  How this app uses APIs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FOOTER START */}
                <div className="container-fluid my-5">
                    <footer className="text-center text-white my-5">
                        {/* Grid container */}
                        <div className="container pt-4 footer_container">
                            {/* Section: Social media */}
                            <section className="mb-4">
                                <div className="row justify-content-center mx-0">
                                    <h3 className="text-warning">CONTACT US</h3>
                                </div>
                                {/* Twitter */}
                                <a target="blank" className="btn btn-link btn-floating btn-lg text-warning " href="https://twitter.com/zeusfinanceBSC?s=20" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
                                {/* Discord */}
                                <a target="blank" className="btn btn-link btn-floating btn-lg text-warning " href="https://discord.gg/87zAyeuz2d" role="button" data-mdb-ripple-color="dark"><i className="fab fa-discord" /></a>
                            </section>
                            {/* Section: Social media */}
                        </div>
                        {/* Grid container */}
                        {/* Copyright */}
                        <div className="text-center text-white ">
                            Copyright @ Zeus Finance 2022
                        </div>
                        {/* Copyright */}
                    </footer>
                </div>
                {/* FOOTER END */}
            </section>
        </div>
    )
}

export default Pantheon
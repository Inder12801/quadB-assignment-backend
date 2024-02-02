import React, { useState,useEffect} from 'react';
import "./Home.css";
import {Header} from "./Header";
import Footer from "./Footer";
import 'react-circular-progressbar/dist/styles.css';

export const Home = () => {
    const [isLightTheme, setIsLightTheme ] = useState(false);
    const [countDownTimer, setCountDownTimer] = useState(60);
  useEffect(() => {
      if(countDownTimer == 0) setCountDownTimer(60);
    countDownTimer > 0 && setTimeout(() => setCountDownTimer(countDownTimer - 1), 1000);
  }, [countDownTimer])
const onThemeButtonClick = () => {
    setIsLightTheme(!isLightTheme)

};
    return (
        <React.Fragment>
            <div className={("theme-") + (isLightTheme ? "light" : "dark")}>
            <Header isLightTheme={isLightTheme} onThemeButtonClick={onThemeButtonClick } countDownTimer={countDownTimer}/>
            <div className="Container-fluid " style={{ padding: "0px 30px" }}>
                <div className="d-flex justify-content-around align-items-center average-header" style={{ padding: "10px 0px" }}>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">0.47 %</div>
                        <div className="average-header-subHeading">5 Mins</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">0.98 %</div>
                        <div className="average-header-subHeading">1 Hour</div>
                    </div>
                    <div style={{ maxWidth: "40%" }}>
                        <div className="text-center font-32 average-block">
                            <div className="average-subText">
                                <span className="subText-heading">Best Price to Trade</span>
                            </div>
                            <div className="average-heading" style={{ paddingBottom: "10px" }}>₹ 1,67,334</div>
                            <div className="average-subText">Average ETH/INR net price including commission</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">5.86 %</div>
                        <div className="average-header-subHeading">1 Day</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">6.41 %</div>
                        <div className="average-header-subHeading">7 Days</div>
                    </div>
                </div>
                <a target="_blank" href="https://finstreet.in/">
                    <img src="cryptonews.png" style={{ width: "100%", padding: "0px 0px 20px" }} />
                </a>
            </div>
            <div className="fiat-crypto-table table-responsive" style={{ margin: "0px auto" }}>
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                            <th>
                                <h4><span className="pointer">#</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Platform</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Last Traded Price</span></h4>
                            </th>
                            <th><h4><span className="pointer">Buy / Sell Price</span></h4>
                            </th>
                            <th><h4><span className="pointer">Difference</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Savings</span></h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle"><h4 className="table-text">1</h4></td>
                            <td className="align-middle"><a target="_blank" href="">
                                <h4 className="table-text"><img src="wazix.png" className="exchange-logo" ></img> <span className="exchange-name ">WazirX</span></h4>
                            </a></td><td className="align-middle"><h4 className="table-text">₹ 1,79,500</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹ 1,79,200 / ₹ 1,79,500</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">7.27 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ ₹ 12,165</h4></td>
                        </tr>
                        <tr><td className="align-middle"><h4 className="table-text">2</h4></td>
                            <td className="align-middle"><a target="_blank" href="https://bit.ly/2BJxccc">
                                <h4 className="table-text">
                                    <img src="bitbns.png" className="exchange-logo" />
                                    <span className="exchange-name ">Bitbns</span>
                                </h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹ 1,76,875</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹ 1,75,745 / ₹ 1,76,801</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">5.70 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ ₹ 9,540</h4></td>
                        </tr><tr><td className="align-middle"><h4 className="table-text">3</h4></td>
                            <td className="align-middle"><a target="_blank" href=" "><h4 className="table-text">
                                <img src="giotus.png" className="exchange-logo" /><span className="exchange-name ">Giotus</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹ 1,79,000</h4></td><td className="align-middle"><h4 className="table-text"><span>₹ 1,78,010 / ₹ 1,79,000</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">6.97 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ ₹ 11,665</h4></td>
                        </tr>
                        <tr>
                            <td className="align-middle"><h4 className="table-text">4</h4></td>
                            <td className="align-middle"><a target="_blank" href=" "><h4 className="table-text">
                                <img src="colodax.png" className="exchange-logo" /><span className="exchange-name ">Colodax</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹ 1,08,675</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹ 1,08,675 / ₹ 1,10,469</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-red">-35.06 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-red">▼ ₹ 58,659</h4></td>
                        </tr>
                        <tr>
                            <td className="align-middle"><h4 className="table-text">5</h4></td>
                            <td className="align-middle"><a target="_blank" href=""><h4 className="table-text">
                                <img src="zebpay.png" className="exchange-logo" /><span className="exchange-name">Zebpay</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹ 1,82,000</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹ 1,82,200 / ₹ 1,82,000</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">8.76 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ ₹ 14,665</h4></td>
                        </tr>
                        <tr>
                            <td className="align-middle"><h4 className="table-text">6</h4></td>
                            <td className="align-middle"><a target="_blank" href=" "><h4 className="table-text">
                                <img src="coibdcx.png" className="exchange-logo" /><span className="exchange-name">CoinDCX</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹ 1,77,959</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹ 1,77,959 / ₹ 1,78,763</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">6.35 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ ₹ 10,624</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="padding-header" style={{ padding: "20px" }}>
                <a target="_blank" href="https://ftx.com/#a=finstreet">
                    <img src="BannerFTXNews.png" style={{ width: "100%", filter: isLightTheme?"invert(0)":"invert(1)" }} /></a>
            </div>
            <Footer />
        <div className="d-flex justify-content-center" style={{border:"solid 1px #191d28", backgroundColor :"#191d28",position:"fixed",left:"0", alignItems:"center",width:"100vw",height:"47px",bottom:"0", zIndex :"8"}}><button className="add-button btn btn-outline-info" style={{display: "block"}}>Add hodlinfo to home screen</button></div>
        </div>

        </React.Fragment>
    )
};
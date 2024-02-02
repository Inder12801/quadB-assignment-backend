import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export const Header  = (props:any)  => {
    const [dropdownOpenCurrency, setDropdownOpenCurrency] = useState(false);
    const [dropdownOpenAsset, setDropdownOpenAsset] = useState(false);
    const [currency, setCurrency] = useState("INR");
    const [asset, setAsset] = useState("BTC");
    const toggleCurrency = () => setDropdownOpenCurrency(prevState => !prevState);
    const toggleAsset = () => setDropdownOpenAsset(prevState => !prevState);
    return (
        <div style={{ padding: "20px 30px 0px" }}>
            <div className=" align-items-center justify-content-sm-center row">
                <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
                    <a href="/">
                        <div className="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
                            <img src="hodlinfo_logo.png" className="fiat-logo" style={{ padding: "10px" }} />
                        </div>
                    </a>
                    <p className="col-12 text-center-xs" style={{ fontFamily: "Oswald, sans-serif", "marginTop": "-18px", opacity: "0.8", "fontSize": "18px", color: "gray" }}>Powered By <a className="footer-text-link" rel="nofollow" target="_blank" href="https://www.finstreet.in/" style={{ color: "rgb(61, 198, 193)" }}> Finstreet </a>
                    </p>
                </div>
                <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
                    <div className="btn-group">
                        <ButtonDropdown isOpen={dropdownOpenCurrency} toggle={toggleCurrency} >
                            <DropdownToggle caret className={"header-button"}>
                                {currency}
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem value="INR" onClick={(e) => setCurrency((e.target as HTMLInputElement).value)}>INR</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                        <ButtonDropdown isOpen={dropdownOpenAsset} toggle={toggleAsset} >
                            <DropdownToggle caret className={"header-button"}>
                                {asset}
                            </DropdownToggle>
                            <DropdownMenu>

                                <DropdownItem value="BTC" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>BTC</DropdownItem>
                                <DropdownItem value="ETH" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>ETH</DropdownItem>
                                <DropdownItem value="USDT" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>USDT</DropdownItem>
                                <DropdownItem value="XRP" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>XRP</DropdownItem>
                                <DropdownItem value="TRX" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>TRX</DropdownItem>
                                <DropdownItem value="DASH" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>DASH</DropdownItem>
                                <DropdownItem value="ZEC" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>ZEC</DropdownItem>
                                <DropdownItem value="ZEC" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>XEM</DropdownItem>
                                <DropdownItem value="IOST" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>IOST</DropdownItem>
                                <DropdownItem value="WIN" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>WIN</DropdownItem>
                                <DropdownItem value="BTT" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>BTT</DropdownItem>
                                <DropdownItem value="WRX" onClick={(e) => setAsset((e.target as HTMLInputElement).value)}>WRX</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    <div className="btn-group">
                        <a target="_blank" href="" type="button" aria-haspopup="true" aria-expanded="false" className="header-button btn btn-secondary">BUY {asset}</a>
                    </div>
                </div>
                <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                    <div className="d-inline-flex flex-wrap align-items-center justify-content-center">
                        <div className="progress-bar-wrapper">
                            <CircularProgressbar value={parseFloat((props.countDownTimer * 100 / 60.0).toString())} text={`${props.countDownTimer}`} />
                        </div>
                        <a className="color-white" href="/connect/telegram">
                            <div className="d-flex telegram-logo-text header-telegram-button btn align-items-center pointer color-white">
                                <div className="d-inline-block">
                                    <img src="telegram.png" className="telegram-logo" /></div>
                                <div className="text-nowrap d-inline-block color-white">Connect Telegram</div>
                            </div>
                        </a>
                        <div className="margin-10 d-inline-block">
                            <label className="switch">
                                <input type="checkbox" checked={!props.isLightTheme} onChange={props.onThemeButtonClick} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
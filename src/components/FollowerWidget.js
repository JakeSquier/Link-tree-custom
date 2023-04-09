import React, { useEffect} from 'react';
import insta from "../media/stockInsta.png"
import twitch from "../media/twitchApp.png"
import tiktok from "../media/tiktokLogo.png"

function FollowerWidget(){

    return(
        <div id='followerWidget'>
            <div className='platform' id="instagram">
                <div className='platformLeft'>
                    <div className='platformImg'>
                        <img src={insta} id="instaLogo"/>
                    </div>
                    <div className='platformText'>
                        <p className="stockTitle">Instagram</p>
                        <p className="stockAlias">INSTA</p>
                    </div>
                </div>
                <div className='platformRight'>
                    <p className='followerCount'>3,083</p>
                    <p className='percent'>+5.6%</p>
                </div>
            </div>
            <div className='platform' id="twitch">
                <div className='platformLeft'>
                    <div className='platformImg'>
                        <img src={twitch} id="twitchLogo"/>
                    </div>
                    <div className='platformText'>
                        <p className="stockTitle">Twitch</p>
                        <p className="stockAlias">TTV</p>
                    </div>
                </div>
                <div className='platformRight'>
                    <p className='followerCount'>10</p>
                    <p className='percent'>+1.2%</p>
                </div>
            </div>
            <div className='platform' id="tiktok">
                <div className='platformLeft'>
                    <div className='platformImg'>
                        <img src={tiktok} id="tiktokLogo" />
                    </div>
                    <div className='platformText'>
                        <p className="stockTitle">Tiktok</p>
                        <p className="stockAlias">TT</p>
                    </div>
                </div>
                <div className='platformRight'>
                    <p className='followerCount'>202</p>
                    <p className='percent'>+10.9%</p>
                </div>
            </div>
        </div>
    )
}

export default FollowerWidget;
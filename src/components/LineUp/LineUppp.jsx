import React, { useCallback, useState, useEffect, Fragment, useContext, setState } from "react";
import "./LineUp.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "../context";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from "bootstrap/dist/css/bootstrap.css";  //necessery 4 modal
import $ from 'jquery';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import LineUpTilte from './../../image/lineUp_morning.png'

class TableDayOne extends Component {
    state = { showTable: true, isDayOne: true };



    changeTime = () => {
        // $('.sun').toggleClass('sun-Clicked');
        // $('.moon').toggleClass('moon-Clicked');
        this.setState({ showTable: !this.state.showTable });
    }


    changeDay2 = () => {
        // this.setState({showTable:true})
        $('.dayOne').hide();
        $('.dayTwo').show();
    }

    render() {
        return (
          
            <div className={` ${this.state.showTable?'normalType':'whyTest'}`}>
                <div >
                    <img className="designLineUp" src={LineUpTilte} />
                </div>
                <div style={{ display: this.state.isDayOne ? 'block' : 'none' }} className='allTable'>


                    <div className="d-flex justify-content-start daySunBox " >
                        <img src="https://media.discordapp.net/attachments/677538517949218820/942958807909273610/sun.png"
                            className={`sun ${this.state.showTable?'':'sun-Clicked'}`} 
                        ></img>
                        {/* style={{ display: this.state.showTable ? 'block' : 'none' }} */}
                        <img src="https://media.discordapp.net/attachments/677538517949218820/942958807724732487/Mask_Group_1498.png"
                            className={`moon ${this.state.showTable?'':'moon-Clicked'}`}  
                        > 
                            {/* style={{ display: this.state.showTable==true ? 'none' : 'block' }} */}
                            {/* style={{ visibility: this.state.showTable==true ? 'hidden' : 'visible' }} */}
                        </img>
                    </div>
                    <div className='btnG'>
                        <button type="button" className="btn btn-secondary campDay1" >
                            DAY 1
                        </button>
                        <button type="button" className="btn btn-outline-secondary campDay2"
                            onClick={this.changeDay2}>
                            DAY 2
                        </button>
                    </div>

                    <div className="dayOneTable">
                        <div className='dayTable ' >
                            <div className="container lineTableSetting"
                                style={{ display: this.state.showTable ? 'block' : 'none' }}>
                                <table className="table"  >
                                    <thead className="thisBar">
                                        <tr className="tHead d-flex flex-wrap myBox">
                                            <th className="col-0 border-0 timeTitle "><b>Time</b></th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 1</div></th>
                                            <th className="col-3 border-0" ><div className="stageColorM">STAGE 2</div></th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 3</div></th>
                                        </tr>
                                    </thead>


                                    <tbody className="giveMeSpace">
                                        <tr className="d-flex flex-wrap myBox ">
                                            <th className="col-0 inTableTime">13:00 <br></br>13:50</th>
                                            <th className="col-3" >  
                                                <a id='RiseAgainst' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".RiseAgainst">Rise Against
                                                </a>
                                                <div className="modal fade RiseAgainst" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog ">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title RiseAgainst" id="" >Rise Against</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row border-0" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox " >
                                                                            <img className="Rise-img" src="https://media.discordapp.net/attachments/677538517949218820/939062948280827965/RiseAgainst.jpg"></img>
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Rise Against???????????????????????????????????????????????????????????????1999??????
                                                                                <br/> &emsp;&emsp;????????????????????????????????????/???????????????Tim McIlrath??????????????????Zach Blair????????????Joe Principe?????????Brandon Barnes???
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia container' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className="spotify4Rise">
                                                                                <iframe src="https://open.spotify.com/embed/album/2Gq0ERke26yxdGuRvrqFTD" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                 
                                            </th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='KanaBoon' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".KanaBoon">KanaBoon
                                                </a>
                                                <div className="modal fade KanaBoon" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog ">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title RiseAgainst" id="" >KanaBoon</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='KanaBoon' src="https://truth.bahamut.com.tw/s01/202003/fcc710eb36b5fb7ceed43d3de6874c02.JPG"></img>
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;KANA-BOON ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                                                <br />&emsp;&emsp;??????????????????????????????????????????????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/45z2ntx53Y0d42S9IpN6OH" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                 
                                            </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime ">13:50 <br></br>14:40</th>
                                            <th className="col-3" > </th>
                                            <th className="col-3 " >  
                                                <a id='ManWithAMission' className='mr-1 hrefColor' type="button" data-toggle="modal"
                                                    data-target=".ManWithAMission">MWAM
                                                </a>
                                                <div className="modal fade ManWithAMission" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ManWithAMission " id="" >MWAM</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='MWAN' src="https://img.ltn.com.tw/Upload/ent/page/800/2013/08/09/phphUENSt.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;MAN WITH A MISSION??????????????????????????????????????????
                                                                                <br />&emsp;&emsp;???????????????????????????????????????????????????????????????????????????????????????????????????????????????MWAM?????????????????????????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/4y9CcT0uoNVxUhjq2ku0bX" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                              
                                            </th>
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">14:40 <br></br>15:30</th>
                                            <th className="col-3" >  
                                                <a id='Ashes_Remain' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Ashes_Remain">Ashes Remain
                                                </a>
                                                <div className="modal fade Ashes_Remain" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Ashes_Remain" id="" >Ashes Remain</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='ashes_remain' src="http://2.bp.blogspot.com/-VbUDEu9tW4o/TmGaoyCyULI/AAAAAAAAAHU/tmVfiE1aolE/s320/Ashes+Remain+3+Courtesy+of+Air+1.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Ashes Remain????????????????????????????????????????????????2001????????????????????????????????????????????????
                                                                                ?????????Josh Smith???Ryan Nalepa?????????
                                                                                <br />&emsp; ??????????????????????????????What I've Become??????2011?????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/13H9LxFZVQVfRMUxKQvejv" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                                                                <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='MayShow' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".MayShow">AmazingShow
                                                </a>
                                                <div className="modal fade MayShow" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title MayShow" id="" >AmazingShow</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='MayShow' src="https://www.mirrormedia.com.tw/assets/images/20210512161304-47eb43889c970bd8e8511beed4a25dfd-tablet.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
                                                                                &emsp;&emsp;?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/2M55kmmq0xR32RKDtBIeHT" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">15:30 <br></br>16:20</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Back-On' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Back-On">Back-On
                                                </a>
                                                <div className="modal fade Back-On" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Back-On" id="" >Back-On</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='Back-On' src="https://blow.streetvoice.com/wp-content/uploads/2016/06/pic.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;BACK-ON ????????????????????????????????????????????????????????????????????????????????? KENJI03 ????????????????????????MC TEEDA ?????????????????? RAP ????????????
                                                                                ?????????????????????????????????????????????????????????????????????????????????????????????
                                                                                ????????????????????????????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/3TpgBK0jom391y7SdJF1iO" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">16:20 <br></br>17:10</th>
                                            <th className="col-3" >  
                                                <a id='Falling_In_Reverse' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Falling_In_Reverse">Falling In Reverse
                                                </a>
                                                <div className="modal fade Falling_In_Reverse" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Falling_In_Reverse" id="" >Falling In Reverse</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://redefined.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/04/22050956/FallingInReverse_PressPhoto.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Falling in Reverse??????????????????????????????????????????????????????????????????????????????2008??????
                                                                                <br />&emsp;?????????????????????Ronnie Radke??????????????????????????????Christian Thompson??????????????????Derek Jones????????????Zakk Sandler?????????Ryan Seaman?????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/1KwwS07TEbKS8r1rU4UUe4" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='RADWIMPS' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".RADWIMPS">RADWIMPS
                                                </a>
                                                <div className="modal fade RADWIMPS" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title RADWIMPS" id="" >RADWIMPS</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.jame-world.com/media/image/2015-09/6720.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;??????RAD???RADWIMPS????????????4????????????????????????????????????????????????????????????
                                                                                <br />&emsp;&emsp;??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????2001???????????????????????????2005??????????????? ???
                                                                                ????????????????????????voque ting???
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/0a69ul4zJx8c6ZBy2carWF" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">17:10 <br></br>18:00</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='GreenDay' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".GreenDay">GreenDay
                                                </a>
                                                <div className="modal fade GreenDay" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title GreenDay" id="" >GreenDay</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://media.gq.com.tw/photos/5dbc889518079c0008a1e321/master/w_1600,c_limit/2016081560782437.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Green Day??????????????????????????????1986???????????????90????????????????????????????????????????????????
                                                                                <br />&emsp;&emsp;??????????????????/?????????Billie Joe Armstrong????????????Mike Dirnt????????????Tr?? Cool???????????????70???????????????????????????????????????The Clash???????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/3id4t9IqRoB1f1smOERtrY" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">18:00 <br></br>18:50</th>
                                            <th className="col-3" >  
                                                <a id='ZZ_TOP' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".ZZ_TOP">ZZ TOP
                                                </a>
                                                <div className="modal fade ZZ_TOP" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ZZ_TOP" id="" >ZZ TOP</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://s.hdnux.com/photos/01/16/13/03/20492480/3/rawImage.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;ZZ Top???1969??????????????????????????????????????????????????????????????????<br />&emsp;&emsp;????????????????????????????????????Dusty Hill?????????????????????Billy Gibbons????????????????????????????????????????????????????????????Frank Beard???
                                                                                ????????????????????????????????????45??????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/5LMGAYhn2ywaxGZdtmXGpw" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Trash' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Trash">Trash
                                                </a>
                                                <div className="modal fade Trash" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Trash" id="" >Trash</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://img.shoplineapp.com/media/image_clips/60e263d22849b600176dbddc/original.jpg?1625449426"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;TRASH??????????????????????????????2009???12????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/4xI5LoEWLxoTm4DNa4fSUn" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="iAmHere">
                                    <button className="hereBtn"
                                        onClick={this.changeTime}><FontAwesomeIcon icon={faCaretDown} className='fontAwe'/></button>
                                </div>
                            </div>


                        </div>
                        <div className="dayOneNight nightTable " style={{ display: this.state.showTable == true ? 'none' : 'block' }}>
                            <div className="container lineTableSettingNight" >
                                <table className="table border-0">
                                    <thead className="">
                                        <tr className="tHead d-flex flex-wrap myBox">
                                            <th className="col-0 border-0 timeTitle" ><b>Time</b> </th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 1</div></th>
                                            <th className="col-3 border-0" ><div className="stageColorM">STAGE 2</div></th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 3</div></th>
                                        </tr>
                                    </thead>

                                    <tbody className="giveMeSpace">
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">18:00 <br></br>18:50</th>

                                            <th className="col-3" >  
                                                <a id='ZZ_TOP1' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".ZZ_TOP1">ZZ TOP
                                                </a>
                                                <div className="modal fade ZZ_TOP1" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ZZ_TOP" id="" >ZZ TOP</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://s.hdnux.com/photos/01/16/13/03/20492480/3/rawImage.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;ZZ Top???1969??????????????????????????????????????????????????????????????????<br />&emsp;&emsp;????????????????????????????????????Dusty Hill?????????????????????Billy Gibbons????????????????????????????????????????????????????????????Frank Beard???
                                                                                ????????????????????????????????????45??????

                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/5LMGAYhn2ywaxGZdtmXGpw" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Trash1' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Trash1">Trash
                                                </a>
                                                <div className="modal fade Trash1" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Trash1" id="" >Trash</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://img.shoplineapp.com/media/image_clips/60e263d22849b600176dbddc/original.jpg?1625449426"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;TRASH??????????????????????????????2009???12????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/4xI5LoEWLxoTm4DNa4fSUn" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">18:50 <br></br>19:40</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Maroon5' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Maroon5">Maroon5
                                                </a>
                                                <div className="modal fade Maroon5" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Maroon5" id="" >Maroon5</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://en.celebrity.tn/wp-content/uploads/2021/08/What-was-Maroon-5-original-name-758x474.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Maroon 5????????????????????????????????????????????????????????????????????????<br />&emsp;&emsp;????????????????????????Adam??????????????????????????????Jesse?????????Micke??????????????????James ?????????Matt Flynn????????????PJ Morton???
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/6ijGiBcBfUwkoyHn5VUHU2" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox ">
                                            <th className="col-0 inTableTime">19:40 <br></br>20:30</th>
                                            <th className="col-3" >  
                                                <a id='Bob_Seger' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Bob_Seger">Bob Seger
                                                </a>
                                                <div className="modal fade Bob_Seger" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Bob_Seger" id="" >Bob Seger</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.billboard.com/wp-content/uploads/media/bob-seger-1980-billboard-1548.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Bob Seger ???????????????????????????????????????????????????
                                                                                <br />
                                                                                &emsp;&emsp;??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????2004??????2012???????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/1vhib5WLHRVdOpRjiTHk15" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3 " >  
                                                <a id='AsiaKung-Fu' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".AsiaKung-Fu">Asian Kung-Fu<br />Generation
                                                </a>
                                                <div className="modal fade AsiaKung-Fu" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title AsiaKungFu" id="" >Asian Kung-Fu Generation</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://1.bp.blogspot.com/-Rmcle26nzTs/W1OIDfmZ4PI/AAAAAAAA1Kw/T-vfzru4jKw8CzAIOmrphj6reZQ7kzMtQCLcBGAs/s1600/ASIAN%2BKUNG-FU%2BGENERATION.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;ASIAN KUNG-FU GENERATION????????????????????????????????????????????????
                                                                                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/56xQzwz8VKC3LOtvrI4g04" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">20:30 <br></br>21:20</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='OneRepublic' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".OneRepublic">OneRepublic
                                                </a>
                                                <div className="modal fade OneRepublic" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title OneRepublic" id="" >OneRepublic</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://images3.kingautos.net/2017/07/22/87TjOAhBpWzrAFf.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;OneRepublic???2003???????????????????????????????????????????????????2007??????????????????????????????????????????????????????Apologize?????????????????????????????????Top 5????????????????????????????????????????????????
                                                                                <br />
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/20lOt6G8MHv8ZO7ViOmiP7" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox ">
                                            <th className="col-0 inTableTime">21:20<br></br>22:10</th>
                                            <th className="col-3" >  
                                                <a id='ThirtySeconds_TO_Mars' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".ThirtySeconds_TO_Mars">30S To Mars
                                                </a>
                                                <div className="modal fade ThirtySeconds_TO_Mars" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ThirtySeconds_TO_Mars" id="" >Thirty Seconds To Mars</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.youredm.com/wp-content/uploads/2021/10/image003-750x519.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Thirty Seconds to Mars??????????????????????????????????????????????????????1998????????????
                                                                                <br />&emsp;?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/6OlCoydaNFUU7v1Xo5ZJPx" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Journey' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Journey">Journey
                                                </a>
                                                <div className="modal fade Journey" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Journey" id="" >Journey</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.morrisonhotelgallery.com/images/medium/Journey_BarrySchultz19.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Journey???1973???????????????????????????Frumious Bandersnatch??????????????????????????????????????????????????????
                                                                                <br />&emsp;???????????????????????????????????????1978??????1987????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/2OyVtIEp7O7a6o82DF4Ba5" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBo bgc">
                                            <th className="col-0 inTableTime">22:10 <br></br>23:00</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='BonJovi' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".BonJovi">BonJovi
                                                </a>
                                                <div className="modal fade BonJovi" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title BonJovi" id="" >BonJovi</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://i.iheart.com/v3/re/new_assets/5a90701b96f64dd64b193742"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Bon Jovi????????????????????????????????????????????????????????????????????????Jon Bon Jovi?????????
                                                                                ?????????1980??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/0kBfgEilUFCMIQY5IOjG4t" width="240" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">23:10 <br></br>00:00</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3"> </th>
                                            <th className="col-3"> </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="iAmHere2">
                                    <button className="hereBtn2" onClick={this.changeTime}><FontAwesomeIcon icon={faCaretUp}  className='fontAwe'/></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default TableDayOne;

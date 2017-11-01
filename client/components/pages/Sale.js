import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

import {reactLocalStorage} from 'reactjs-localstorage';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import Loader from 'react-loader';
import Navigation from '../components/Navigation';
import Danger from '../components/Danger';
import BackButton from '../components/BackButton';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import commaNumber from 'comma-number';
import countdown from 'react-countdown-to-future-date';

import axios from 'axios';

var loaderOptions = {
  length: 0,
  width: 12,
  lines: 9,
  radius: 70,
  color: '#FFF',
  top: '45%',
  scale: 0.6,
  corners: 1,
  className: 'loadedContentSpinner',
  zIndex: 20
}

export class Sale extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginEmail: "",
      pageStatus: false,
      saleStatus: "null", // null | started | ended
      tokenTotal: 15000000,
      tokenSold: 0,
      tokenBalance: 0,
      rateETH: 6400,
      currentBlockNum: 9999999999999999999999999999,
      saleEndedStatus: false,
      testnetAddress: "0x07C7d8f35E4467205Ed8eE270a7ab8813b6382Bb",
      mainnetAddress: "0",
      contributedETH: 10,
      startingBlock: 4467813,
      mainnetStatus: false,
      addressContribution: ""
    }
  }

  componentDidMount(){
    this.setState({
      loginEmail: reactLocalStorage.get('email'),
      addressContribution: reactLocalStorage.get('addressContribution')
    }, () => {
        let etherscanSubDomain;
        let ethAddress;

        if(this.state.mainnetStatus == false){
          etherscanSubDomain = "ropsten";
          ethAddress = this.state.addressContribution; //this.state.testnetAddress;
        }else{
          etherscanSubDomain = "api";
          ethAddress = this.state.mainnetAddress;
        }

        console.log("ethAddress: "+ethAddress)
        // add api call here to get token contribution from etherscan
        axios.get('https://' + etherscanSubDomain + '.etherscan.io/api?module=account&action=balance&address=' + ethAddress + '&tag=latest&apikey=YourApiKeyToken').then((response) => {
          this.setState({
            contributedETH: (response.data.result/1000000000000000000).toFixed(2),
            tokenSold: ((response.data.result/1000000000000000000).toFixed(2) * this.state.rateETH)
          }, function(){
            axios.get('https://etherchain.org/api/basic_stats').then((response) => {
              this.setState({
                currentBlockNum: response.data.data.difficulty.number
              }, function(){
                if(this.state.saleEndedStatus == false && this.state.tokenSold < this.state.tokenTotal){
                  if(this.state.currentBlockNum > this.state.startingBlock){
                    this.setState({
                      saleStatus: "started",
                      pageStatus: true
                    })
                  }else{
                    this.setState({
                      saleStatus: "null",
                      pageStatus: true
                    })
                  }
                }else{
                  this.setState({
                    saleStatus: "ended",
                    saleEndedStatus: true,
                    pageStatus: true
                  })
                }
              })
            }).catch(function (error) {
              ////console.log(error);
            });
          })
        }).catch(function (error) {
          ////console.log(error);
        });
    })

  }


  render() {
    let dangerDisplay;
    if(this.state.loginEmail == "" || this.state.loginEmail == undefined){
      dangerDisplay = <Danger />;
    }else{
      dangerDisplay = "";
    }

    let salesDisplay;

    if (this.state.pageStatus == true) {
      if (this.state.saleStatus == "null") {
        salesDisplay = (
          <div className={cx('')}>
            <div className={cx('pageContentHeader')}>
              <div className={cx('pageContentHeaderText')}>
                <div className={cx('siteTitle')}>
                  The Aditus Token Sale has not yet begun
                </div>
                <div>
                  The token sale will start on 1st December 2017 12:00 SG Time
                </div>
              </div>
              <BackButton />
              <div className={cx('clear')}></div>
            </div>
            {dangerDisplay}
            <div className={cx('sectionSale')}>
              countdown
            </div>
          </div>
        )
        // block time formula
        // 1st december epoch: 1512129600
        // average block time: 14s
        // current ETH block num + ((1st december epoch - current epoch)/average block time) = 1st december block number
        // final 4655143
      }else if (this.state.saleStatus == "started") {
        salesDisplay = (
          <div className={cx('')}>
            <div className={cx('pageContentHeader')}>
              <div className={cx('pageContentHeaderText')}>
                <div className={cx('siteTitle')}>
                  The Aditus Token Sale has begun
                </div>
                <div>
                  Please take care to make sure the contribution is sent to the correct address
                </div>
              </div>
              <BackButton />
              <div className={cx('clear')}></div>
            </div>
            {dangerDisplay}
            <div className={cx('sectionSale')}>
              <div className={cx('sectionSaleDetail')}>
                <div className={cx('sectionSaleDetailInfo')}>
                  <div className={cx('sectionSaleDetailInfoEntry')}>
                    <div>
                      Token sale ending on
                    </div>
                    <div className={cx('sectionSaleDetailInfoDate','serif')}>
                      10th December 2017
                    </div>
                  </div>
                  <div className={cx('sectionSaleDetailInfoEntry')}>
                    <div>
                      ADT tokens sold
                    </div>
                    <div className={cx('sectionSaleDetailInfoEntryDisclaimer')}>
                      * shown amount include pre-sale
                    </div>
                    <div className={cx('sectionSaleDetailInfoNum','serif')}>
                      {commaNumber(this.state.tokenSold)}
                    </div>
                  </div>
                  <div className={cx('sectionSaleDetailInfoEntry')}>
                    <div>
                      Remaining ADT tokens balance
                    </div>
                    <div className={cx('sectionSaleDetailInfoNum','serif')}>
                      {commaNumber(this.state.tokenTotal - this.state.tokenSold)}
                    </div>
                  </div>
                </div>
                <div className={cx('sectionSaleDetailAddress')}>
                  <div className={cx('sectionSaleDetailAddressTitle', 'serif')}>
                    Send your contribution to the our ETH address
                  </div>
                  <div className={cx('sectionSaleDetailAddressEntry')}>
                    <div className={cx('sectionSaleDetailAddressEntryTitle')}>
                      Raw Ethereum Address
                    </div>
                    <CopyToClipboard text="aditusico.eth"
                        onCopy={() => this.setState({copied: true})}>
                      <div className={cx('loginInput')}>
                        <input type="text" className={cx('serif')} value="0x123456789..." disabled />
                      </div>
                    </CopyToClipboard>
                  </div>
                  <div className={cx('sectionSaleDetailAddressEntry')}>
                    <div className={cx('sectionSaleDetailAddressEntryTitle')}>
                      ENS address
                    </div>
                    <div>
                      <CopyToClipboard text="aditusico.eth"
                        onCopy={() => this.setState({copied: true})}>
                        <div className={cx('loginInput')}>
                          <input className={cx('serif')} type="text" value="aditusico.eth" disabled />
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className={cx('sectionSaleDetailAddressDisclaimer')}>
                    * Refer <a href="" target="_blank">here</a> to double confirm on the above address
                  </div>
                </div>
                <div className={cx('clear')}></div>
              </div>
              <Link to='/summary'>
                <button>
                  View your contribution summary
                </button>
              </Link>
            </div>
          </div>
        )
      }else if (this.state.saleStatus == "ended") {
        salesDisplay = (
          <div className={cx('')}>
            <div className={cx('pageContentHeader')}>
              <div className={cx('pageContentHeaderText')}>
                <div className={cx('siteTitle')}>
                  The Aditus Token Sale has ended
                </div>
                <div>
                  Please refer to our blog post for further notice on the post token sale ADT distribution
                </div>
              </div>
              <BackButton />
              <div className={cx('clear')}></div>
            </div>
            {dangerDisplay}
            <div className={cx('sectionSale')}>
              Thank you for participation in the Aditus Token Sale
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        <Navigation />
        <div className={cx('page')}>
          <Loader loaded={this.state.pageStatus} options={loaderOptions}>
            <div className={cx('pageContent')}>
              {salesDisplay}
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

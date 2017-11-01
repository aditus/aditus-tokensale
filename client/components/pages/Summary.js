import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

import {reactLocalStorage} from 'reactjs-localstorage';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import Navigation from '../components/Navigation';
import Danger from '../components/Danger';
import BackButton from '../components/BackButton';

import commaNumber from 'comma-number';
import Loader from 'react-loader';

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

export class Summary extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginEmail: "",
      pageStatus: false,
      testnetUserAddress: "0xd535c2A00f7143ce849d514396ec1792adcE3788", // from user
      testnetOurAddress: "0x07C7d8f35E4467205Ed8eE270a7ab8813b6382Bb", // to Aditus
      mainnetUserAddress: "0", // from user
      mainnetOurAddress: "0", // to Aditus
      contributedETH: 0,
      contributedRawETH: 0,
      rateETH: 6400,
      startingBlock: 0,
      fullRawData: 0,
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
      let ethUserAddress;
      let ethOurAddress;

      if(this.state.mainnetStatus == false){
        etherscanSubDomain = "ropsten";
        ethUserAddress = this.state.addressContribution; //this.state.testnetUserAddress;
        ethOurAddress = this.state.testnetOurAddress;
      }else{
        etherscanSubDomain = "api";
        ethAddress = this.state.mainnetAddress;
        ethUserAddress = this.state.mainnetUserAddress;
        ethOurAddress = this.state.mainnetOurAddress;
      }

      axios.get('https://' + etherscanSubDomain + '.etherscan.io/api?module=account&action=txlist&address=' + ethUserAddress + '&startblock=' + this.state.startingBlock + '&endblock=99999999&sort=desc&apikey=YourApiKeyToken').then((response) => {
        this.setState({
          fullRawData: response.data.result
        }, function(){
          var calculatedValue = 0;
          for(var i=0; i<this.state.fullRawData.length; i++){
            if((this.state.fullRawData[i].to).toLowerCase() == ethOurAddress.toLowerCase()){
              calculatedValue += parseInt(this.state.fullRawData[i].value);
            }
          }

          calculatedValue = calculatedValue/1000000000000000000;
          //calculatedValue = calculatedValue.toFixed(2);
          this.setState({
            contributedRawETH: calculatedValue,
            contributedETH: calculatedValue.toFixed(5),
            pageStatus: true
          })
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

    return (
      <div>
        <Navigation />
        <div className={cx('page')}>
          <Loader loaded={this.state.pageStatus} options={loaderOptions}>
            <div className={cx('pageContent')}>
              <div className={cx('pageContentHeader')}>
                <div className={cx('pageContentHeaderText')}>
                  <div className={cx('siteTitle')}>
                    Your Aditus Contribution Summary
                  </div>
                  <div>
                    Here’s an overview of your participation in the Aditus Token Sale.
                  </div>
                </div>
                <BackButton />
                <div className={cx('clear')}></div>
                {dangerDisplay}
              </div>
              <div className={cx('sectionSummary')}>
                <div className={cx('sectionSummaryFigure')}>
                  <div className={cx('sectionSummaryFigureEntry')}>
                    <div className={cx('sectionSummaryFigureEntryTitle','serif')}>
                      ETH contribution
                    </div>
                    <div className={cx('sectionSummaryFigureEntryNum','serif')}>
                      {commaNumber(this.state.contributedETH)}
                    </div>
                  </div>
                  <div className={cx('sectionSummaryFigureEntry')}>
                    <div className={cx('sectionSummaryFigureEntryTitle','serif')}>
                      ADT Tokens to receive
                    </div>
                    <div className={cx('sectionSummaryFigureEntryNum','serif')}>
                      {commaNumber((this.state.contributedRawETH * this.state.rateETH).toFixed(5))}
                    </div>
                  </div>
                  <div className={cx('clear')}></div>
                </div>
                <div className={cx('sectionSummaryStats')}>
                  <div className={cx('sectionSummaryStatsEquivalent','serif')}>
                    1 ETH = {commaNumber(this.state.rateETH)}
                  </div>
                  <div className={cx('sectionSummaryStatsHistory')}>
                    View your transaction history on <a href={"https://etherscan.io/address/" + this.state.userAddress} target="_blank">Etherscan.io</a>
                  </div>
                  <div className={cx('sectionSummaryStatsButton')}>
                    <Link to='/sale'>
                      <button>
                        Purchase more ADT tokens
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

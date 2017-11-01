import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import Navigation from '../components/Navigation';
import BackButton from '../components/BackButton';

export class Faq extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginEmail: ""
    }
  }
  componentDidMount(){
    this.setState({
      loginEmail: reactLocalStorage.get('email')
    })
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className={cx('page')}>
          <div className={cx('pageContent')}>
            <div className={cx('pageContentHeader')}>
              <div className={cx('pageContentHeaderText')}>
                <div className={cx('siteTitle')}>
                  FAQs on Aditus's token sale
                </div>
                <div>
                  If there are still unanswered queries regarding the token sale, please visit our social channels or email <a href="mailto:support@aditus.net">support@aditus.net</a>.
                </div>
              </div>
              <BackButton />
              <div className={cx('clear')}></div>
            </div>
            <div className={cx('sectionFaq')}>
              <div className={cx('sectionFaqEntry')}>
                <div className={cx('sectionFaqEntryQuestion')}>
                  How are the ADT tokens distributed?
                </div>
                <div className={cx('sectionFaqEntryAnswer')}>
                  The ADT tokens will be finalised after the token sale and all user's destination address will be assigned with the contributed ADT tokens during the creation of the actual token smart contract
                </div>
              </div>
              <div className={cx('sectionFaqEntry')}>
                <div className={cx('sectionFaqEntryQuestion')}>
                  When will the Token Sale address be released?
                </div>
                <div className={cx('sectionFaqEntryAnswer')}>
                  To prevent scams from mimicking the Aditus Team, we will be releasing our funding address concurrently on the Token Sale site, Twitter, Medium, Reddit and Telegram for user to cross reference the actual ETH address to sent to.
                </div>
              </div>
              <div className={cx('sectionFaqEntry')}>
                <div className={cx('sectionFaqEntryQuestion')}>
                  How many ADT tokens are there available in this Token Sale?
                </div>
                <div className={cx('sectionFaqEntryAnswer')}>
                  There are 15 million ADT tokens available in this current token sale. However this 15 million allocation includes our pre-sale participants, thus upon starting of the token sale you may notice that there is already a significant amount of ADT tokens sold.
                </div>
              </div>
              <div className={cx('sectionFaqEntry')}>
                <div className={cx('sectionFaqEntryQuestion')}>
                  How many ADT tokens are there in total?
                </div>
                <div className={cx('sectionFaqEntryAnswer')}>
                  There will be 1 billion ADT tokens in total. We are reserving .... allocation details
                </div>
              </div>
              <div className={cx('sectionFaqEntry')}>
                <div className={cx('sectionFaqEntryQuestion')}>
                  Why isn't the Token Sale address not actual Token smart contract?
                </div>
                <div className={cx('sectionFaqEntryAnswer')}>
                  To ensure absolute security during the Aditus Token Sale, we decided to separate the token generation process from the funding process. The advantage of this setup is it allows any dispute resolution (loss of user's private key, hacks of user's email account etc.) to be addressed post-funding.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component, useEffect, useState } from "react";
// import { connect } from "react-redux";
import {useSelector, useDispatch} from 'react-redux';
// import { bindActionCreators } from "redux";
import formatNumber from "format-number";
import "./home.css";
import Button from "../../component/Button";
import { accountActions } from "../../Redux/actions/accountActions";

/*
class Home extends Component {
  state = {
    username: 'Virat',
    profession: "Cricket",
  };
  
  componentDidMount() {
    this.props.actions.getBalances();
  }

  handleIncrement = e => {
    this.props.actions.increaseBalance(
      this.props.account.amount,  // 1250000,  // last update state value
      e.target.dataset.amount , //10000
    );
  };

  handleDecrement = e => {
    this.props.actions.reduceBalance(
      this.props.account.amount,
      e.target.dataset.amount
    );
  };

  render() {
    const { username } = this.state;
    const { amount: totalAmount, requestingAmount } = this.props.account;   // reducer state
    // this.props.
    console.log(this.props, 'props');

    return (
      <div className="App">
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
         {requestingAmount ? (<span>{'Fetching balance'}</span>) : formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>
        <Button
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    account: state.account
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(
  mapStateToProps,  
  mapDispatchToProps 
)(Home);

*/

const Home = (props) => {
  const account = useSelector(state => state.account)

  const dispatch = useDispatch();

  const state = {
      username: 'Virat',
      profession: "Cricket",
  };

  useEffect(() => {
    dispatch(accountActions.getBalances())
  }, []);

  const handleIncrement = e => {
    dispatch(accountActions.increaseBalance(
      account.amount,  // 1250000,  // last update state value
      e.target.dataset.amount , //10000
    ));
  };

  const handleDecrement = e => {
    dispatch(accountActions.reduceBalance(
      account.amount,
      e.target.dataset.amount
    ));
  };

  console.log(props, 'props');
  const { amount: totalAmount, requestingAmount } = account;   // reducer state

  return (
    <div className="App">
      <p className="App__username">Hello, {state.username}! </p>
      <div className="App__amount">
       {requestingAmount ? (<span>{'Fetching balance'}</span>) : formatNumber({ prefix: "$" })(totalAmount)}
        <p className="App__amount--info">Total Amount</p>
      </div>
      <Button
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default Home;


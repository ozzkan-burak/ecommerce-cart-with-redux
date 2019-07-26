import React,{Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// actions
import cartAction from '../actions/cartActions';

class Cart extends Component {


  render(){
    let cartPrice = null;
    const cartList= this.props.cartState.cartList.map((item)=>{
      cartPrice += item.price;
      return (
        <li key={item.name}>
          {item.name} 
          <strong>{item.price} TL</strong> &nbsp; 
          <span>{item.count}</span>
          <button onClick={(e)=>{this.props.cartAction('REMOVE', item.id)}} className="btn">X</button>
        </li>
      )
    })
    //const cartList = this.props.cartState.cartList;
    return(
      <div className="cart-container">
          <strong>SEPET</strong>
          <ul>
            {cartList}
          </ul>
          <span>Toplam {cartPrice} TL</span>
          
        </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cartState: state.cart
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    cartAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);
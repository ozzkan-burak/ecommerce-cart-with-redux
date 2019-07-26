import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// actions
import cartAction from '../actions/cartActions';

class ProductList extends Component {
  
 
  render(){
    const list = this.props.products.map((item)=>{
      return(
        <li className="collection-item" key={item.id}>
          <span className=""><img className="" src={`/assets/img/${item.photo}`} /></span>
          <span  className="">{item.name}</span>
          <span  className="">{item.price} TL</span>
          
          <button onClick={(e)=>{this.props.cartAction('ADD', item)}} className="btn">+</button>
        </li>
        );
    })
    return(
      <ul className="collection">{list}</ul>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
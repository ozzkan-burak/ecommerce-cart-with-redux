import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './App.css';

import Reducers from './reducers';

// custom compenents
import Title from './component/Title';
import ProductList from './component/ProductList';
import Cart from './component/Cart';

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

class App extends Component {

  constructor(){
    super()
    
    this.products = [
      {id:1, name:'ASSET-1', photo:'B.png', price:16},
      {id:2, name:'ASSET-2', photo:'B.png', price:12},
      {id:3, name:'ASSET-3', photo:'B.png', price:100},
      {id:4, name:'ASSET-4', photo:'B.png', price:40},
      {id:5, name:'ASSET-5', photo:'B.png', price:15},
      {id:6, name:'ASSET-6', photo:'B.png', price:20}
    ];
    this.addCart = this.addCart.bind(this);
  }

  addCart(item){
    let updateList = this.state.cartList;
    updateList.push(item);
    this.setState({
      basketList: updateList
    })
  }

  render(){
    return (
      <Provider store={store}>
        <div className="App container">
          <Title val={'Ürünü Listesi'}  count={this.products.length}/>
          <ProductList products={this.products}/>
        </div>
        <Cart />
      </Provider>
  
    );
  }
}

export default App;

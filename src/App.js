import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: ["Laptop"],
      total: 999.00
    }
  }

  // if a function will modify state, create a function here to do so

  addToCart = (product) => {
    let newCart = [...this.state.cart, product];
    this.setState({cart: newCart});
  }
  
  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" addToCart={this.addToCart} />
        <Product type="Mechanical Pencil" price="0.25" addToCart={this.addToCart}/>
        <Product type="College Ruled Loose Leaf" price="2.75" addToCart={this.addToCart}/>
        <Summary globalState={this.state} />
      </div>
    );
  }
}

export default App;

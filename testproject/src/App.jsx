import { Component } from "react";
import Data from "./Data";
import ProductCard from "./component/ProductCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: Data,
    };
  }

  render() {
    const { productList } = this.state;
    return (
      <>
        <div className="container mt3">
          <div className="row">
            {productList.map((product, index) => {
              return (
                <div className="col-md-3 p-2" key={index}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;

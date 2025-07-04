import { Component } from "react";

class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <>
        <div className="d-flex flex-column align-items-centre " style={{}}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ maxWidth: "100%", maxHeight: "150px", objectFit: "cover" }}
          />
          <h6 className="mt-3 text-centre">{product.title}</h6>
        </div>
      </>
    );
  }
}

export default ProductCard;

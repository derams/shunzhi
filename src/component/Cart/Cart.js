import React, { Component } from 'react'
import './cart.css'
class Cart extends Component {

  render(){
    const { shops } = this.props
    let newshops = shops.filter(t=>t.buy===true)

    const post = newshops.map(t=>(
      <div className="post" key={t.id}>
        <div className="img1">
          <img src={t.img} alt=""/>
          <p>{t.title}<span>${t.price}</span></p>
        </div>
        <div className="num">
          <a href="javascript:;"className="sub" onClick={()=>this.props.handleSub(t.id)}>-</a>
          <span>{t.num}</span>
          <a href="javascript:;"className="add" onClick={()=>this.props.handleAdd1(t.id)}>+</a>
        </div>
      </div>
    ))
    return(
      <div className="cart">
        <div className="total">{this.props.total}元</div>
        <div className="count">{post}</div>
      </div>
    )
  }
}

export default Cart

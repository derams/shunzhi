import React, { Component } from 'react'
import './shop.css'

class Shop extends Component {
  handleAdd = (id) => {
    this.props.completeBuy(id)
  }
  render(){
    const shop = this.props.shops.map(t=>(
      <div key={t.id} className='bun'>
        <img src={t.img} alt=""/>
        <button onClick={()=>this.handleAdd(t.id)} className={t.buy&&'active'}>{this.props.complete(t.buy)}</button>
      </div>
    ))
    return(
      <div className="shop">
        {shop}
      </div>
    )
  }
}

export default Shop

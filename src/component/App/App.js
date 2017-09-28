import React, { Component } from 'react'

import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'
import './app.css'
import axios from 'axios'
class App extends Component {
  state = {
    total:0,
    shopcart:[],
    shops:[]
  }
  complete = (t) => {
    if(t){
      return '已购'
    }else{
      return '购买'
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3008/posts`).then(res=>{
      this.setState({
        shops:res.data,
        total:this.calTotal(this.state.shops)
      })
    })

  }
  calTotal = (shop) => {
    const total = shop.reduce((sum,t)=>{

      return sum=sum + t.price*t.num
    },0)
    return total
  }

  completeBuy=(id)=>{
  console.log(id)
  let newshops = this.state.shops
    newshops.find(re => re.id===id).buy=true
    const filterShops = newshops.filter(t=>t.buy===true)
    this.setState({
      num:this.state.num=1,
      shops:newshops
  })
}
  handleAdd1 = (id) => {
    let newshops = this.state.shops.map(t=>{
      if(id===t.id){
        return {...t,num:t.num+1}
      }
      return t
    })
    this.setState({
      shops:newshops,
      total:this.calTotal(newshops)
    })
  }
  handleSub = (id) => {
    let newshops = this.state.shops.map(t=>{
      if(id===t.id&&t.num>0){
        return {...t,num:t.num-1}
      }
      return t
    })
    this.setState({
      shops:newshops,
      total:this.calTotal(newshops)
    })
  }
  render(){

    return(
      <div className="app">
        <div className="shop_wrap">
          <Shop shops={this.state.shops}
              complete={this.complete}
              completeBuy={this.completeBuy}
            />
        </div>
        <div className="cart_wrap">
          <Cart shops={this.state.shops}
            total={this.state.total}
            handleAdd1={this.handleAdd1}
            handleSub={this.handleSub}
            />
        </div>
      </div>
    )
  }
}

export default App

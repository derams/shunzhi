import React, { Component } from 'react'

import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'
import './app.css'
class App extends Component {
  state = {
    total:0,
    shopcart:[],
    shops:[
      {
        id:'1',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505618212059&di=5b5e5dc11250517c2b9d8fdd398cbbf5&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F0417%2F51%2F10.jpg',
        com:'购买',
        price:92,
        num:0,
        title:'小蛋糕',
        buy:false
      },
      {
        id:'2',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505618212061&di=99347219dd1f66829b488599711e1819&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F68%2F78%2F10y58PIC2ix_1024.jpg',
        com:'购买',
        price:48,
        num:0,
        title:'小蛋糕',
        buy:false
      },
      {
        id:'3',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505618212057&di=a73f4c0742ac8405293256b2eb55cbc3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fc2fdfc039245d68882fde981aec27d1ed21b2413.jpg',
        com:'购买',
        price:56,
        num:0,
        title:'小蛋糕',
        buy:false
      },
      {
        id:'4',
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3633807691,3552254697&fm=27&gp=0.jpg',
        com:'购买',
        price:86,
        num:0,
        title:'小蛋糕',
        buy:false
      }
    ]
  }

  complete = (t) => {
    if(t){
      return '已购'
    }else{
      return '购买'
    }
  }
  componentDidMount(){
    this.setState({
      total:this.calTotal(this.state.shops)
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
      
    )
  }
}

export default App

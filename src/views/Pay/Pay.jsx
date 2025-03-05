import React, { Component } from 'react'

export default class Pay extends Component {  
    //Aqui vai a logica
    state = {
        count: 0,
    }

    componentDidMount(){
        console.log('Ola Mundo!')
    }

    componentDidUpdate(prevProps, prevState){

    }

    componentWillUnmount(){
        
    }

  render() {
    return <h1>Ola mundo!</h1>
  }
}

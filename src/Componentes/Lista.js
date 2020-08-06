/**
 * Componente tipo clase que contiene una lista para mostrarla en pantalla
 */

 
import React, { Component } from 'react';

class Lista extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [
          'Primero',
          'Segundo',
          'Tercero',
          'Cuarto',
          'Quinto'
        ]
      }
    };
  
    render(){
      return (
        <ul>
          { 
          this.state.data.map((item, index) => {
            return <li key={index}>{item}</li>
          })
          }
        </ul>
      );
    }
  }

  export default Lista;
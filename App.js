import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Styles from './styles'
import cursos from './src/cursos'
import { render } from 'react-dom'

class CursosList extends Component {
  state = {
    cursos: this.cursos
  }


  render() {
    return (
      <ul>
        { this.state.cursos.map(cursos => <li>{cursos}</li>)}
      </ul>
    )
  }
}
 
export default CursosList
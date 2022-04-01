import React, { Component } from 'react'
import {SafeAreaView,Text,StyleSheet,FlatList } from 'react-native'
import api from './src/Services/api'
import Curso from './src/Pages/Curso'
import { Form } from 'reactstrap'


class CursosList extends Component {
 
  constructor(props){
    super(props);
    this.state={
      cursos:[]
    }
  }

  async componentDidMount(){
    const response = await api.get('pessoasassistidas/?page=2&page_size=1'
    ,
{     auth: {
      username: 'est.joao.f',
      password: 'Lamburguini456'
    },
}
    );
    this.setState({
      cursos:response.data.results
    });
    console.log(this.state.cursos)
  }

  render() {
    return (
      
      <SafeAreaView style={styles.container}>
        <Form action="#"> 
          <FlatList data={this.state.cursos} renderItem={({item})=><Curso data={item}/>}
        /> 
        </Form>
       
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1

  }
})

 
export default CursosList
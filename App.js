import React, { Component } from 'react'
import {SafeAreaView,Text,StyleSheet,FlatList } from 'react-native'
import api from './src/Services/api'
import Assistido from './src/Pages/Assistido'
import { Form } from 'reactstrap'
import Menu from './src/Pages/Menu'

class CursosList extends Component {
 
  constructor(props){
    super(props);
    this.state={
      assitido:[],
      value:'',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

/*{Pega o valor digitado no input}*/
  handleChange(event) {
    this.setState({value: event.target.value});
  }


  /*{Aqui seta e dispara o evento de busca na api passando os valores 
  atualizados passados pelo input de pesquisa para props 'value' }*/
  
  handleSubmit(event) {
    if(this.state.value!=''){
      this.componentDidMount()
    }else{
      assitido =[]
    }

    event.preventDefault();
  }




  async componentDidMount(){

    if(this.state.value!=''){
                  
              const response = await api.get('pessoasassistidas/'+this.state.value+'/'
              ,
            {     auth: {
                username: 'est.joao.f',
                password: 'Lamburguini456'
              },
            }
              );
              this.setState({
                assitido:response.data
              });
    }
  }
 

  render() {
 
     console.log(this.state.assitido)
      console.log(this.state.value)
 

    return (

      

      <SafeAreaView style={styles.container}>
        <Menu></Menu>

      <Form onSubmit={this.handleSubmit}>
        <label>
          Buscar Id Assistido:
        </label> 
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Enviar" />

      </Form>

      <Form>
        <Assistido data={this.state.assitido}/>
      </Form>

     
      {/* utilizar o flatlist para renderizar array com varios itens.
              <FlatList data={this.state.cursos} renderItem={({item})=><Curso data={item}/>}
              /> 

      */}

      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'',
    flex:1

  }
})

 
export default CursosList
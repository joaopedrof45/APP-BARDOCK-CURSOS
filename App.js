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
      usuario:'',
      senha:'',
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


  verifica_sessao(){

    var data=[];
    data['usuario'] = sessionStorage.getItem("usuario");
    data['senha']= sessionStorage.getItem("senha");

    if(data!= ""){
      return data;
    }else{
      return false;
    }

  }

  login_sessao(){
    var status_sessao

    if(this.verifica_sessao()==true){
          status_sessao = false;
        }else{

            /* inserindo usuario proxy */
            var usuario = prompt("digite seu usuario");
            sessionStorage.setItem("usuario", usuario);
            this.setState({
              usuario:usuario
            });
            this.setState({
              senha:senha
            });

            
            var senha = prompt("digite sua senha");
            sessionStorage.setItem("senha", senha);
            status_sessao = true;
    }

    return status_sessao
   
  }

  logout_sessao(){

  }


  
  async componentDidMount(){

    /* verifica se a usuario em sessao se não chama o method de login */
    if(this.state.usuario ==''){
      this.login_sessao()
    }


      if(this.state.value!=''){

        const response = await api.get('pessoasassistidas/'+this.state.value+'/'
        ,
      {     auth: {
          username: sessionStorage.getItem("usuario"),
          password: sessionStorage.getItem("senha")
        },
      }
        );
        this.setState({
          assitido:response.data
        });
  }









    
  }
 

  render() {
    return (

      

      <SafeAreaView style={styles.container}>
        <Menu ></Menu>
<             br></br>
              <div className="container text-center">
                  <Form onSubmit={this.handleSubmit}>
                    <label>
                      Buscar Id Assistido:
                    </label> 
                    
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" value="Buscar" />

                  </Form>
              </div>
              <br></br>


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
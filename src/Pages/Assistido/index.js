import React, {Component} from 'react';
import { View ,Text,Image,StyleSheet } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Card } from 'reactstrap';



export default class Curso extends Component{
    render(){

        if(this.props.data!=''){
            return(
            
          
                <View>
                   <div className="container">
                    <Card className="text-center" >
                        <Text >ID Assistido: </Text>

                        <div className="input-group mb-3">
                        <span className="input-group-text">ID Assistido</span>
                        <input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="basic-addon1" value={this.props.data.id} readOnly ></input>
                        </div>


                        <div className="input-group mb-3">
                        <span className="input-group-text">Nome Assistido</span> 
                        <input type="text" className="form-control" placeholder="nome" aria-label="nome" aria-describedby="basic-addon1" value={this.props.data.nome} onChange={e=>this.props.data.nome(e.target.value)}></input>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text">Email Assistido</span>
                        <input type="text" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1" value={this.props.data.email} ></input>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text">Naturalidade</span>
                        <input type="text" className="form-control" placeholder="naturalidade" aria-label="naturalidade" aria-describedby="basic-addon1" value={this.props.data.naturalidade} ></input>
                        </div>
                        
                        <Button color="primary"  href={'/salvar/'+this.props.data.id}>Salvar</Button>
                        <Button color="danger"  href={'/deletar/'+this.props.data.id}>Excluir</Button>
                       
                    </Card>
                    </div>
                </View>
                
                
            )

        }else{
            return(false)
        }
   

        
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeCurso:{
   
    },

  })
import React, {Component} from 'react';
import { View ,Text,Image,StyleSheet ,TouchableOpacity} from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Card } from 'reactstrap';


export default class Curso extends Component{
    render(){

        if(this.props.data!=''){
            return(
            
          
                <View>
                    <Card className="text-center" >
                        <Text >ID Assistido:   {this.props.data.id}</Text>
                        <TouchableOpacity onPress={()=> alert(this.props.data.nome)}>
                        <Text >Nome Assistido: {this.props.data.nome}</Text>
                        </TouchableOpacity>
                        <Text >Email Assistido: {this.props.data.email}</Text>
                        <Text >Email Naturalidade: {this.props.data.naturalidade}</Text>
                        <Button color="primary"  href={'/salvar/'+this.props.data.id}>Salvar</Button>
                        <Button color="danger"  href={'/deletar/'+this.props.data.id}>Excluir</Button>
    
                    </Card>
    
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
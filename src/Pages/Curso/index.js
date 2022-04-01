import React, {Component} from 'react';
import { View ,Text,Image,StyleSheet ,TouchableOpacity} from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Card } from 'reactstrap';


export default class Curso extends Component{
    render(){

        
        return(
          
            <View>
                <Card className="text-center" >
                    <Text >ID Assistido:   {this.props.data.id}</Text>
                    <TouchableOpacity onPress={()=> alert(this.props.data.nome)}>
                    <Text >Nome Assistido: {this.props.data.nome}</Text>
                    </TouchableOpacity>
                    <Text >Email Assistido: {this.props.data.email}</Text>
                    <Text >Email Naturalidade: {this.props.data.naturalidade}</Text>
                    <Text >Email Naturalidade: {this.props.data.enderecos[0].logradouro}</Text>
                    <Button color="primary"  href={'/salvar/'+this.props.data.id}>Salvar</Button>
                    <Button color="danger"  href={'/deletar/'+this.props.data.id}>Excluir</Button>

                </Card>

            </View>
            
            
        )

        
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeCurso:{
   
    },

  })
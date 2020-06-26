import {View, TextInput, Button, StyleSheet, Text} from 'react-native'
import React, { useState } from 'react';

const ContatoInput = (props) => {
    const[nome, setNome] = useState('');
    const[telefone, setTelefone] = useState('');
    const[contato, setContato] = useState([]);

  //captura o texto digitado
    const capturarNome = (nome) => {
        setNome(nome);
        setContato([nome, telefone]);
    };

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
        setContato([nome , telefone]);
    };

    return(
        <View style={styles.primeiraView}>
         
        <Text style={styles.textoText}>Nome: </Text><TextInput style={styles.textInputText} placeholder="Informe seu nome" 
                        onChangeText={capturarNome} value={nome}
                        ></TextInput> 
        <Text style={styles.textoText}>Telefone: </Text><TextInput style={styles.textInputText} placeholder="Informe seu telefone"
                        onChangeText={capturarTelefone} value={telefone}
                        />
        <View style={styles.botao} ><Button title='+' color='indigo' 
                                            onPress={() => props.onAdicionarContato(contato)}/></View>
        
      </View>

    );
}

const styles = StyleSheet.create({
    textoText:{
        fontSize:20,
        color:'#8B0000'
      },
    
      botao:{   
        marginTop: 10,
        alignItems:'center',
        
      },
      
      primeiraView: {
        position:'absolute',
        width:500,
        height:200,
        marginLeft: 100,
        marginTop:50,
        borderRadius: 10,
        padding: 10,
        backgroundColor:'lavender',
      },

      textInputText:{
        //width: '90%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 8
      },

});

export default ContatoInput;
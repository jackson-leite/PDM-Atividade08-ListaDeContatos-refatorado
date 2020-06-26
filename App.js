import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {

  const[contatos, setContatos] = useState([]);
  const[contadorContatos, setContadorContatos] = useState(0);

//ajuste na função que adiciona contatos
  const adicionarContato = (contato) => {
    setContatos ((contatos) =>{ 
    setContadorContatos (contadorContatos + 1); 
    return [{key: contadorContatos.toString(), value: contato}, ...contatos];;
    } );
  }

  const removerContato = (keyASerRemovida) => {
    setContatos (contatos => {
      return contatos.filter ((contato) => {
        return contato.key !== keyASerRemovida
      })
    });
  };

  return (
    <View style={styles.viewDeFundo}>
      <ContatoInput onAdicionarContato={adicionarContato}/> 
      
      <View style={styles.segundaView}>
        <Text style={styles.listaContatosText}>Lista de Contatos</Text>
        <FlatList backgroundColor={'purple'}
          data={contatos}
          renderItem={
          contato => (
              <ContatoItem
                chave={contato.item.key} 
                nome={contato.item.value[0]}
                telefone={contato.item.value[1]}
                onDelete={removerContato}
              />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewDeFundo: {
    
    display:'flex',
    backgroundColor:'purple',
    flexDirection:'row',
    height:'200%',

  },

  segundaView:{
    position:'absolute',
    marginLeft:700,
    width:500,
    padding: 15,
    backgroundColor:'purple'
  },

  listaContatosText: {
    color:'pink',
    fontSize:20,
    fontFamily:'Lucida Console',
    marginBottom:10,
    textAlign:'center'
  },

});

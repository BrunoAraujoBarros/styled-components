import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { 
    Container,
    Form,
    Titulo

 } from './styless';




export const Forms = () => {
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    // Aqui você pode adicionar a lógica para manipular os dados do formulário
    Alert.alert('Sucesso', `Nome: ${name}\nEmail: ${email}`);
  };

    return(
        <Container >
      <Titulo >Registro</Titulo>
      
      <Form
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      
      <Form
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <Form
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <Button title="Enviar" onPress={handleSubmit}  />
    </Container>
    )
}
import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';

import Input from '../../components/Input';
import Submit from '../../components/Submit';
import User from '../../models/User'
import { addUser } from '../../services'
import { styles } from './styles';

export default function UserCreateView({navigation}: any) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function goHome(): any {
        navigation.navigate('Início')
    }
    
    async function createUser(): Promise<any> {
        if (!name) {
            Alert.alert('Nome não foi informado.');
            return;
        }
        if (!age) {
            Alert.alert('Idade não foi informado.');
            return;
        }

        if (!address) {
            Alert.alert('Endereço não foi informada.');
            return;
        }
        if (!email) {
            Alert.alert('E-mail não foi informada.');
            return;
        }
        if (!password) {
            Alert.alert('Senha não foi informada.');
            return;
        }
        
        let user: User = {
            name: name,
            age: parseInt(age),
            address: address,
            email: email,
            userPassword: password,
        };

        const userCreated = await addUser(user);
        if (!userCreated){
            return;
        }
        
        navigation.reset({
            index: 0,
            routes: [{ name: 'Início' }],
        });
    }
    
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={goHome} style={styles.button}>
                    <Text>Início</Text>
                </Button>
            )
        });
    }, []);

    return (
        <View style={styles.container}>
            <Input label="Nome" value={name} onChange={setName}/>
            <Input label="Idade" value={age} onChange={setAge}/>
            <Input label="Endereço" value={address} onChange={setAddress}/>
            <Input label="E-mail" value={email} onChange={setEmail}/>
            <Input label="Senha" value={password} onChange={setPassword} />
            <Input label="Phone" value={phone} onChange={setPhone}/>
            <Submit text="Cadastrar" onPress={createUser} />
        </View>
    );
}
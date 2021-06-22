import React, { useState } from 'react';

import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';

import Input from '../../components/Input';
import Submit from '../../components/Submit';
import { getAuthentication } from '../../services'
import { styles } from './styles';

export default function HomeView({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function doLogin(): Promise<any> {
        if (!email) {
            Alert.alert('O e-mail não foi informado.');
            return;
        }
        if (!password) {
            Alert.alert('A senha não foi informada.');
            return;
        }

        const token = await getAuthentication(email, password);

        if (!token){
            return;
        }
        
        navigation.reset({
            index: 0,
            routes: [{ name: 'Lista de Produtos' }],
        });
    }
    
    function createUser(): any {
        navigation.navigate('Cadastrar usuário')
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={createUser} style={styles.button}>
                    <Text>Cadastrar usuário</Text>
                </Button>
            )
        });
    }, []);

    return (
        <View style={styles.container}>
            <Input label="E-mail" value={email} onChange={setEmail}/>
            <Input label="Senha" value={password} onChange={setPassword} />
            <Submit text="Acessar" onPress={doLogin} />
            <Image style={styles.logo} source={require('../../../assets/logo.png')} />
        </View>
    );
}
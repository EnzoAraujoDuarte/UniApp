import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();


  const newResearch = () => {
    navigation.navigate('ResearchesView'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/LogoSup.png')} // Verifique se o caminho está correto
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.itemWrapper}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={newResearch} // Navega para a tela de pesquisas
          >
            <Image
              source={require('../../assets/HomeButtons/Pesquisas.png')} // Verifique o caminho
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Pesquisas</Text>
        </View>

        <View style={styles.itemWrapper}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Image
              source={require('../../assets/HomeButtons/StatusdePedidos.png')} // Verifique o caminho
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Status de Pedidos</Text>
        </View>

        <View style={styles.itemWrapper}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Image
              source={require('../../assets/HomeButtons/Notificacoes.png')} // Verifique o caminho
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Notificações</Text>
        </View>

        <View style={styles.itemWrapper}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Image
              source={require('../../assets/HomeButtons/Configuracoes.png')} // Verifique o caminho
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Configurações</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 16,
    paddingVertical: 12,
    borderBottomColor: '#DDD',
  },
  logoContainer: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  gridContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    width: 168,
    height: 173,
    backgroundColor: '#46C4DB',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 50,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;

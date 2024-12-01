import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import questoes from "./questoes.json";

// Componente para Lista de Respostas
const ListaRespostas = ({ navigation }) => {
  const [respostas, setRespostas] = useState([]);

  const handleNovaResposta = () => {
    navigation.navigate("Formulario", { salvarResposta });
  };

  const salvarResposta = (novaResposta) => {
    setRespostas((prev) => [
      ...prev,
      { id: prev.length + 1, data: novaResposta },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Adicionando a logo no canto superior direito */}
      <View style={styles.header}>
        <Text style={styles.title}>Pesquisas</Text>
        <Image
          source={require("../../../../assets/LogoSup.png")} // Substitua pelo caminho da sua logo
          style={styles.logo}
        />
      </View>
      <Text style={styles.subtitle}>{questoes.titulo}</Text>
      <TouchableOpacity style={styles.button} onPress={handleNovaResposta}>
        <Text style={styles.buttonText}>Nova Resposta</Text>
      </TouchableOpacity>
      <FlatList
        data={respostas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.respostaContainer}>
            <Text style={styles.respostaText}>
              📄 Resposta: {item.data}
            </Text>
          </View>
        )}
        style={styles.respostaList}
      />
    </View>
  );
};

// Componente do Formulário
const Formulario = ({ navigation, route }) => {
  const { salvarResposta } = route.params;
  const [respostas, setRespostas] = useState({});

  const handleResposta = (id, resposta) => {
    setRespostas((prev) => ({
      ...prev,
      [id]: resposta,
    }));
  };

  const handleSubmit = () => {
    const dataAtual = new Date().toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    salvarResposta(dataAtual);
    Alert.alert("Sucesso", "Respostas salvas com sucesso!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{questoes.titulo}</Text>
        <Image
          source={require("../../../../assets/LogoSup.png")} // Substitua pelo caminho da sua logo
          style={styles.logo}
        />
      </View>
      <FlatList
        data={questoes.perguntas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          switch (item.tipo) {
            case "texto":
              return (
                <View style={styles.perguntaContainer}>
                  <Text style={styles.perguntaTexto}>{item.texto}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite aqui"
                    onChangeText={(text) => handleResposta(item.id, text)}
                  />
                </View>
              );
            case "radio":
              return (
                <View style={styles.perguntaContainer}>
                  <Text style={styles.perguntaTexto}>{item.texto}</Text>
                  {item.opcoes.map((opcao, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.radioOption}
                      onPress={() => handleResposta(item.id, opcao)}
                    >
                      <Text
                        style={[
                          styles.radioText,
                          respostas[item.id] === opcao && styles.selectedRadio,
                        ]}
                      >
                        {opcao}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              );
            case "dropdown":
              return (
                <View style={styles.perguntaContainer}>
                  <Text style={styles.perguntaTexto}>{item.texto}</Text>
                  <Picker
                    selectedValue={respostas[item.id] || ""}
                    onValueChange={(value) => handleResposta(item.id, value)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Selecione" value="" />
                    {item.opcoes.map((opcao, index) => (
                      <Picker.Item key={index} label={opcao} value={opcao} />
                    ))}
                  </Picker>
                </View>
              );
            default:
              return null;
          }
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Salvar Respostas</Text>
      </TouchableOpacity>
    </View>
  );
};

// Configuração de navegação
const Stack = createStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaRespostas"
        component={ListaRespostas}
        options={{ title: "Iniciar ou Visualizar Respostas" }}
      />
      <Stack.Screen
        name="Formulario"
        component={Formulario}
        options={{ title: "Questionário" }}
      />
    </Stack.Navigator>
  );
};

export default index;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#0056A3",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#333333",
  },
  button: {
    backgroundColor: "#0056A3",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  respostaContainer: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  respostaText: {
    fontSize: 14,
    color: "#555555",
  },
  perguntaContainer: {
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  perguntaTexto: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0056A3",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 5,
  },
  radioText: {
    fontSize: 14,
    color: "#555555",
  },
  selectedRadio: {
    fontWeight: "600",
    color: "#0056A3",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginTop: 5,
  },
});

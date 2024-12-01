import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Biblioteca de ícones

const ResearchesScreen = ({ navigation }) => {
  const data = [
    { id: "1", title: "Questionário de Coaching", date: "13/11/24 - 17:38" },
    { id: "2", title: "Pesquisa de Preços", date: "12/11/24 - 13:45" },
    { id: "3", title: "Pesquisa de Satisfação", date: "09/11/24 - 14:57" },
  ];

  const handlePress = (item) => {
    navigation.navigate("Questionnaire", { researchId: item.id });
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com título */}
      <View style={styles.header}>
        <Text style={styles.title}>Pesquisas</Text>
        <Icon name="clipboard" size={28} color="#0056A3" />
      </View>

      {/* Lista de Pesquisas */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePress(item)}
          >
            <View style={styles.itemHeader}>
              <Icon name="file-text" size={20} color="#0056A3" style={styles.icon} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Text style={styles.itemDate}>{item.date}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#0056A3",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0056A3",
  },
  listContent: {
    padding: 15,
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0056A3",
  },
  itemDate: {
    fontSize: 14,
    color: "#666666",
  },
});

export default ResearchesScreen;

import React, { useState,useContext,useEffect,useCallback } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ActivityIndicator, RefreshControl,Alert } from 'react-native';
import StatusBar from "./../../utils/StatusBar";
import { ICONS } from "../../global";
import { colors } from '../../utils';
import { ROUTENAMES } from "../../constans";
import { AuthContext } from "../../context";
import {UserItem} from "../../components";
import {Header} from "../../components";
import { Server } from '../../server';

const HomeScreen = ({ navigation }) => {
  const {
    authState: { access },
  } = useContext(AuthContext);

  const { baseurl } = access;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
  
      await Server.usersDataList()
    .then((res) => {
      if (res == false || res.length == 0) {
        console.log("sin datos disponibles")
        setLoading(false);
        setRefreshing(false);
      }else{
        console.log("Todo bien");
        setData(res);
        setLoading(false);
        setRefreshing(false);
      }        
      

    })
    .catch((error) => {
      console.error(error);
      setData([]); 
      Alert.alert("Error", "Error de conexión. Intente nuevamente.", [
        { text: "OK" }
      ]);
      setLoading(false);
      setRefreshing(false);
      
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <UserItem
      user={item}
      onPress={() => navigation.navigate(ROUTENAMES.STACK_DETAILS, { user: item })}
    />
  );

  const EmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay datos disponibles</Text>
    </View>
  );



  return (
    <>
    <StatusBar barStyle="dark-content" backColor={colors.white} />
      <Header
        title={"Mis Créditos"}
        iconLeft={ICONS.MENU}
        onPressLeft={() => navigation.openDrawer()}
      />
    <View style={styles.container}>
    {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          ListEmptyComponent={EmptyComponent}
        />
      )}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical:10
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
});

export default HomeScreen;

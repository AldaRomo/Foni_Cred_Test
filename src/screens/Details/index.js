import React, { useState,useContext } from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import StatusBar from "./../../utils/StatusBar";
import { IMAGES, ICONS } from "../../global";

import { colors } from '../../utils';
import {Header} from "../../components";

const DetailsScreen = ({ navigation,route }) => {
  const { user } = route.params;
  console.log(user);
  return (
    <>
    <StatusBar barStyle="dark-content" backColor={colors.white} />
      <Header
        title={"Detalles Crédito"}
        iconLeft={ICONS.ARROW_LEFT}
        onPressLeft={() => navigation.goBack()}
      />
    <View style={styles.container}>
      <Image source={IMAGES.AVATAR_USER} style={styles.profileImage} />

      <Text style={styles.name}>{user.name}</Text>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Estatus</Text>
        <View style={[styles.statusBadge, {backgroundColor: getStatusColor(user.status)}]}>
          <Text style={styles.statusText}>{user.status}</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Número de teléfono</Text>
        <Text style={styles.infoText}>{user.phoneNumber}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Dirección</Text>
        <Text style={styles.infoText}>{user.address}</Text>
        <Text style={styles.infoText}>{user.city}, {user.state}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Pagos hechos</Text>
        <Text style={styles.infoText}>{user.currentPayments} de {user.totalPayments}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Monto Total</Text>
        <Text style={styles.totalAmount}>${user.totalAmount}</Text>
      </View>
    </View>
    </>
  );
};
const getStatusColor = (status) => {
  switch (status) {
    case 'Vencido': return '#FF6B6B';
    case 'Moratorio': return '#FFC107';
    case 'Al Corriente': return '#4CAF50';
    case 'Nuevo': return '#BDBDBD';
    default: return '#E0E0E0';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontFamily:'Poppins-SemiBold',
    marginBottom: 10,
    color: '#333',
  },
  infoSection: {
    width: '100%',
    marginBottom: 15,
    fontFamily:'Poppins-Regular',
    padding: 15,
    backgroundColor: '#F0FFF0',
    borderRadius: 10,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    fontFamily:'Poppins-Regular',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    fontFamily:'Poppins-Regular',
  },
  statusBadge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontFamily:'Poppins-SemiBold',
  },
  totalAmount: {
    fontSize: 18,
    fontFamily:'Poppins-SemiBold',
    color: '#2E8B57',
  },
});

export default DetailsScreen;

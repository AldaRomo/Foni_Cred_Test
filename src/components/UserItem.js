import React from 'react';
import { IMAGES } from '../global';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserItem = ({ user, onPress }) =>{
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={IMAGES.AVATAR_USER} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.details}>{`${user.currentPayments} de ${user.totalPayments} pagos`}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.status, { backgroundColor: getStatusColor(user.status) }]}>
          {user.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
}


export default UserItem;

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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  details: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: '#fff',
    fontSize: 12,
    overflow: 'hidden',
    fontFamily: 'Poppins-Light',
  },
});

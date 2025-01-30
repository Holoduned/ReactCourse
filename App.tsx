/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, FlatList, View, TextInput, Modal} from 'react-native';
import {observer} from 'mobx-react';
import {useRootStore} from './hooks/useRootStore.ts';
import User from './modules/user/User.ts';
import styles from './stylesheets/MainStyle';

const App = observer(() => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { userStore } = useRootStore();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = () => {
    userStore.createUser(first_name, last_name, email);
    userStore.getUsers();
  };

  const updateUser = (user: User) => {
    userStore.updateUser(user, {
      first_name,
      last_name,
      email,
    });
    userStore.getUsers();
  };

  const deleteUser = (user: User) => {
    userStore.deleteUser(user);
    userStore.getUsers();
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Add User</Text>
        <TextInput style={styles.input} placeholder="First Name" value={first_name} onChangeText={setFirstName} />
        <TextInput style={styles.input} placeholder="Last Name" value={last_name} onChangeText={setLastName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <Button title="Add User" onPress={addUser} />
      </View>

      <FlatList
        data={userStore.users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{item.first_name} {item.last_name} - {item.email}</Text>
            <Button title="Delete" onPress={() => deleteUser(item)} />
            <Button title="Update" onPress={() => setModalVisible(true)} />
            <Modal
              visible={isModalVisible}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.overlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.title}>Update User</Text>
                  <TextInput style={styles.input} placeholder="First Name"  onChangeText={setFirstName} />
                  <TextInput style={styles.input} placeholder="Last Name"  onChangeText={setLastName} />
                  <TextInput style={styles.input} placeholder="Email"  onChangeText={setEmail} />
                  <Button title="Update" onPress={() => updateUser(item)} />
                  <Button title="Cancel" onPress={() => setModalVisible(false)} />
                </View>
              </View>
            </Modal>
          </View>
        )}
      />
    </SafeAreaView>
  );
});

export default App;

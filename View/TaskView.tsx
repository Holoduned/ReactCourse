import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

import {useRootStore} from '../Hooks/useRootStore.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TaskModel} from '../Entity/TaskModel.ts';
import FlatList = Animated.FlatList;
import {observer} from 'mobx-react';
import {useState} from 'react';
import Modal from 'react-native-modal';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import Icon from 'react-native-vector-icons/Ionicons';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {Alert} from 'react-native';

export const TaskView = observer(
  ({navigation}: NativeStackScreenProps<any>) => {
    const {taskStore} = useRootStore();

    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {
      modalizeRef.current?.open();
    };

    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.addButton} onPress={onOpen}>
              <Icon name="checkmark-circle-outline" size={30} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
              <Icon name="add-circle-outline" size={30} color="#000000" />
            </TouchableOpacity>
          </View>
        ),
      });
    }, [navigation, taskStore]);

    const [isVisible, setVisible] = useState(false);
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');

    const toggleModal = () => {
      setVisible(!isVisible);
    };

    const handleTitleChange = (text: string) => {
      setInputTitle(text);
    };

    const handleContentChange = (text: string) => {
      setInputContent(text);
    };
    const handleSubmit = () => {
      taskStore.addTask(new TaskModel(uuidv4(), inputTitle, inputContent));
      setInputTitle('');
      setInputContent('');
      toggleModal();
    };

    const handleTaskCompletion = (id: string) => {
      taskStore.taskCompletion(id);
    };

    const handleDeleteTask = (id: string) => {
      taskStore.deleteTask(id);
    };

    const onDeletePress = taskId => {
      Alert.alert(
        'Confirm Delete',
        'Are you sure you want to delete this task?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: () => handleDeleteTask(taskId),
          },
        ],
        {cancelable: true},
      );
    };

    return (
      <SafeAreaView>
        <View>
          <Modal isVisible={isVisible}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.textInput}
                placeholder="Task"
                value={inputTitle}
                onChangeText={handleTitleChange}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Description"
                value={inputContent}
                onChangeText={handleContentChange}
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSubmit}>
                <Text style={styles.textContent}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <Portal>
          <Modalize ref={modalizeRef}>
            <View>
              <Text style={styles.taskTitle}>Завершенные задачи</Text>
              <FlatList
                data={taskStore.tasks}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  item.isComplited && (  // Проверка на isComplited
                    <View style={styles.taskItem}>
                      <View style={styles.taskContentContainer}>
                        <Text
                          style={[styles.taskTitle, styles.taskContent]}
                          onPress={() => handleTaskCompletion(item.id)}>
                          {item.title}
                        </Text>
                        <Text
                          style={styles.taskContent}
                          onPress={() => handleTaskCompletion(item.id)}>
                          {item.content}
                        </Text>
                      </View>
                    </View>
                  )
                )}
              />
            </View>
          </Modalize>
        </Portal>
        <View>
          <FlatList
            data={taskStore.tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.taskItem}>
                <View style={styles.taskContentContainer}>
                  <Text
                    style={[styles.taskTitle, styles.taskContent]}
                    onPress={() => handleTaskCompletion(item.id)}>
                    {item.title}
                  </Text>
                  <Text
                    style={styles.taskContent}
                    onPress={() => handleTaskCompletion(item.id)}>
                    {item.content}
                  </Text>
                </View>
                <View style={styles.container}>
                  <View style={styles.switchContainer}>
                    <Switch
                      trackColor={{false: '#767577', true: '#81b0ff'}}
                      thumbColor={'#f4f3f4'}
                      onValueChange={() => handleTaskCompletion(item.id)}
                      value={item.isComplited}
                    />
                    <Text>
                      {item.isComplited ? 'Completed' : 'Not Completed'}
                    </Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => onDeletePress(item.id)}>
                      <Icon name="trash-outline" size={25} color="#767577" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taskContent: {
    textAlign: 'left',
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#81b0ff',
    height: 25,
    width: 50,
  },
  textContent: {
    textAlign: 'center',
    color: 'white',
  },
  taskItem: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'lightgray',
    padding: 15,
    marginBottom: 8,
  },
  taskContentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  switchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {},
  container: {
    marginLeft: 150,
    flex: 1,
    flexDirection: 'row',
  },
});

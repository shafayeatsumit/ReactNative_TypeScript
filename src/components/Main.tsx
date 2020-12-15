import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { AppState } from '../reducers';

interface MainProps {
  todos: Todo[];
  // some function with no return value
  fetchTodos(): any;
}

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

class _Main extends Component<MainProps> {
  handleXout = (): void => { };

  renderItem = ({ item }: { item: Todo }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.todoText}>{item.title}</Text>
        <TouchableOpacity onPress={this.handleXout} style={styles.xout}>
          <Text style={styles.xoutText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderList = (): JSX.Element => {
    return (
      <View style={{ marginTop: 150 }}>
        <FlatList
          data={this.props.todos}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  fetchTodos = (): void => {
    this.props.fetchTodos();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fetchButton} onPress={this.fetchTodos}>
          <Text style={styles.buttonTitle}>Fetch</Text>
        </TouchableOpacity>
        {this.renderList()}
      </View>
    );
  }
}
// destructuring sysntax
// const mapStateToProps = ({todos}: AppState): { todos: Todo[] } => {
//   return {todos};
// };

const mapStateToProps = (state: AppState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const Main = connect(mapStateToProps, { fetchTodos })(_Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8BAC6',
  },
  todo: {
    textAlign: 'center',
    fontSize: 16,
  },
  fetchButton: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'tomato',
    height: 70,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 30,
  },
  item: {
    height: 60,
    marginVertical: 10,
    width: 380,
    borderRadius: 10,
    // justifyContent: 'center',
    justifyContent: 'space-between',
    padding: 10,
    // paddingLeft: 35,
    paddingLeft: 10,
    paddingRight: 40,

    flexDirection: 'row',
    backgroundColor: '#E1E2E7',
  },
  todoText: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'left',
  },
  xoutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A63A9',
  },
  xout: {
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
    paddingLeft: 10,
  },
});

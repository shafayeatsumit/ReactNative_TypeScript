import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { AppState } from '../reducers';

interface MainProps {
  todos: Todo[];
  // some function with no return value
  fetchTodos(): any;
}

class _Main extends Component<MainProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
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
  },
});

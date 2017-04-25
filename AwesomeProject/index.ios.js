import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  TouchableHighlight
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props)

    this.state = this.defaultState()
  }

  total() {
    let {
      supervision,
      planning,
      teamSelection,
      teamFitness,
      environment,
      complexity
    } = this.state;
    return supervision + planning + teamSelection + teamFitness + environment + complexity
  }

  color() {
    let total = this.total()
    if (total <= 23) return 'Green'
    if (total <= 44) return 'Amber'
    return 'Red'
  }

  renderSlider(theText, theProperty) {
    return <View style={styles.slider}>
      <Text>{theText}: {this.state[theProperty]}</Text>
      <Slider
        value={this.state[theProperty]}
        minimumValue={1}
        maximumValue={10}
        step={1}
        onValueChange={newValue => this.setState({[theProperty]: newValue})}
      />
    </View>
  }

  defaultState() {
    return {
      supervision: 2,
      planning: 2,
      teamSelection: 2,
      teamFitness: 2,
      environment: 2,
      complexity: 2
    }
  }

  render() {
    let color = this.color()
    return (
      <View style={{flex: 1}}>
        <View style={[styles.header, styles[color.toLowerCase()]]}>
          <Text style={styles.headerText}>
            {this.total()} {color}
          </Text>
        </View>

        {this.renderSlider('Supervision', 'supervision')}

        {this.renderSlider('Planning', 'planning')}

        {this.renderSlider('Team Selection', 'teamSelection')}

        {this.renderSlider('Team Fitness', 'teamFitness')}

        {this.renderSlider('Environment', 'environment')}

        {this.renderSlider('Complexity', 'complexity')}

        <TouchableHighlight
          style={styles.resetButton}
          onPress={() => {
            this.setState(this.defaultState())
          }}
        >
          <Text style={styles.resetButtonText}>Reset to 2</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    flex: 2,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  red: {
    backgroundColor: 'red'
  },
  amber: {
    backgroundColor: 'yellow'
  },
  green: {
    backgroundColor: 'green'
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resetButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  resetButtonText: {
    fontSize: 20,
    color: '#fff'
  },
  headerText: {
    fontSize: 20,
    color: '#FFF'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

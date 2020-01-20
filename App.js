import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconn from 'react-native-vector-icons/MaterialIcons';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: '#DDDDDD'}}>
            <View style={{marginHorizontal: 16, flexDirection: 'row'}}>
              <View style={{position: 'relative', flex: 1}}>
                <TextInput
                  placeholder="What do you want to eat?"
                  style={{
                    borderWidth: 1,
                    borderColor: '#E8E8E8',
                    borderRadius: 24,
                    height: 38,
                    fontSize: 14,
                    paddingLeft: 36,
                    paddingRight: 22,
                    backgroundColor: 'white',
                  }}
                />
                <Iconn
                  name="search"
                  size={18}
                  color="black"
                  style={{position: 'absolute', top: 10, left: 12}}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 16,
                }}>
                <Icon name="gamepad-round-right" size={24} color="yellow" />
              </View>
            </View>
            <View>
              <Icon name="" />
              <Text>Rp. 50.000</Text>
            </View>
          </View>
          <View
            style={{
              height: 54,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {/* <Image style={{width:26, height:26}} source={require('./icon/home.png')} /> */}
              <Icon name="home" size={28} color="#43AB4A" />
              <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
                Home
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="reorder-horizontal" size={28} color="#545454" />
              <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
                Orders
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="help-box" size={28} color="#545454" />
              <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
                Help
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="inbox" size={28} color="#545454" />
              <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
                Inbox
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="account" size={28} color="#545454" />
              <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
                Account
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

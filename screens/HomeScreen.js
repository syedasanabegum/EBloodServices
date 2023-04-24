import * as React from 'react';
import { Button, View,Text, ScrollView,StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from './SettingsScreen';
import HouseScreen from './HouseScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import AboutUsScreen from './AboutUsScreen';





const Tab = createBottomTabNavigator();
export default function HomeScreen({ navigation }) {
    return (
      
      <ScrollView contentContainerStyle={{ flex: 1,  
      flexDirection: 'column', justifyContent: 'space-between' }}>
         
        {/*footer */}
         
        <Tab.Navigator style={{bottom:0,}}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'House') {
                  iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                }else if (route.name === 'AboutUs') {
                  iconName = focused
                    ? 'ios-heart'
                    : 'ios-heart-outline';
                }else if (route.name === 'Settings') {
                  iconName = focused
                    ? 'ios-settings'
                    : 'ios-settings-outline';
                }else if (route.name === 'guide') {
                  iconName = focused
                    ? 'ios-book'
                    : 'ios-book-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              
            }}
          >
            <Tab.Screen name="House" component={HouseScreen} />
            <Tab.Screen name="AboutUs" component={AboutUsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="guide" component={PrivacyPolicyScreen} />
            
          
          </Tab.Navigator>
          
          
      {/*footer end */}
      
      
      </ScrollView>
      
      
    );
  }
  const styles = StyleSheet.create({
    
    
    
  })
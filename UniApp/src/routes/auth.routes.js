import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import HomeView from '../pages/Home/HomeView';
import ResearchesView from '../pages/Home/Research/ResearchesView';
import Questionnaire from '../pages/Home/Research/Questionnaire';


const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#004873',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a',
          },
          headerTintColor: '#FFF',
          headerTitle: 'Fazer login',
          headerBackTitleVisible: false,
        }}
      />

      <AuthStack.Screen
        name="HomeView"
        component={HomeView}
        options={{
          headerTintColor: '#000000',
          headerTitle: 'Sair',
          headerBackTitleVisible: false,
        }}
      />

      <AuthStack.Screen
        name="ResearchesView"
        component={ResearchesView}
        options={{
          headerTitle: 'Pesquisas',
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="Questionnaire"
        component={Questionnaire}
        options={{
          headerTitle: 'Pesquisas',
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
            
  

      


    </AuthStack.Navigator>
  );
}

export default AuthRoutes;

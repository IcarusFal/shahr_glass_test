
import React, { useState, useEffect } from "react";
import {MAIN_URL} from './../mainApi/constant';
import { StyleSheet} from 'react-native';
import { Container, Content, Item, Input, Button, Text } from 'native-base';
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true);

const LoginScreen = ({ navigation }) => {
  const [number, setNumber] = useState(null);
  useEffect(() => {
    // console.log(number)
  }, [number])
  const login =async () => {
    try {
      const response = await fetch(`${MAIN_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // your expected POST request payload goes here
          phone:number
        })
      });
      const data = await response.json();
      if(data){
        // enter your logic when the fetch is successful
        navigation.navigate("AuthScreen",{number:number})
        }
      //console.log(data);
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error)
    }

  }
  return (
    <Container>
      <Content style={styles.Container} >
        <Item regular style={styles.textInputContainer_}>
          <Input
          style={styles.placeholder}
            maxLength={11}
            keyboardType={"numeric"}
            placeholder='شماره تلفن خود را وارد کنید'
            placeholderTextColor={"#b8bfb9"}
            value={number}
            onChangeText={
              (text) => {
                setNumber(text);
              }} />
        </Item>
        <Button style={styles.ButtonContainer}
          onPress={login}>
          <Text>ارسال کد</Text>
        </Button>
      </Content>

    </Container>
  )

}

const styles = StyleSheet.create({
  Container: {
    top: '30%',
    flex: 1,
    alignContent: 'center'
  },

  textInputContainer_: {
    borderWidth: 2,
    borderRadius: 10,
    height: 55,
    borderColor: "#b0b8b2",
    marginRight: 20,
    marginLeft: 20,
  },

  ButtonContainer: {
    justifyContent: 'center',
    marginTop: 20,
    width: 100,
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center'
  },
  placeholder: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  }

});
export default LoginScreen;

import React, { useState } from "react";
import { MAIN_URL } from './../mainApi/constant';
import { StyleSheet } from 'react-native';
import { Container, Content, Item, Input, Button, Text, View } from 'native-base';
import { I18nManager } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
I18nManager.forceRTL(true);

const AuthScreen = ({ navigation, route }) => {
  const { number } = route.params;
  //console.log(number)
  const [code, setCode] = useState(null);
  const auth = async () => {
    try {
      const response = await fetch(`${MAIN_URL}/tokens`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: number,
          code: parseInt(code)
        })
      });
      const data = await response.json();
      //console.log(data);  
      if (data) {
        // console.log(data.data.access_token)  
        await AsyncStorage.setItem("access_token", data.data.access_token);
        let token = await AsyncStorage.getItem("access_token");
        //console.log(token);
        navigation.navigate("ProductsScreen");  
      }
      //else { console.log("data not found") }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Container>
      <Content style={styles.Container} >
        <View style={styles.numb}>
          <Text style={{ fontSize: 20, color: "#b0b8b2" }}>{number}</Text>
        </View>
        <Item regular style={styles.textInputContainer_}>
          <Input
            maxLength={4}
            keyboardType={"number-pad"}
            placeholder='کد ارسال شده را وارد کنید'
            placeholderTextColor={"#b8bfb9"}
            value={code}
            onChangeText={
              (text) => {
                setCode(text);
              }} />
        </Item>
        <Button style={styles.ButtonContainer}
          onPress={auth}>
          <Text >تایید</Text>
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
  numb: {
    marginBottom: 20,
    alignItems: 'center',

  },

  textInputContainer_: {
    borderWidth: 2,
    borderRadius: 10,
    height: 55,
    borderColor: "#b0b8b2",
    marginRight: 20,
    marginLeft: 20
  },

  ButtonContainer: {
    justifyContent: 'center',
    marginTop: 20,
    width: 100,
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center'
  },

});
export default AuthScreen;

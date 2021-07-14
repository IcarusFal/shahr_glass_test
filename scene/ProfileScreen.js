import React, { useEffect ,useState} from "react";
import { StyleSheet } from 'react-native';
import { MAIN_URL } from './../mainApi/constant';
import { Container, Content, Item, Button, Text, Input } from 'native-base';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true);

const ProfileScreen = ({navigation}) => {
  const [userInfo,setUserInfo] = useState([])
  const profile = async () => {
    let token = await AsyncStorage.getItem("access_token");
    //console.log(token);
    try {
      const response = await fetch(`${MAIN_URL}/users/self`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${ token}`
        },  
      });
      const data = await response.json();
      setUserInfo(data.data)
      console.log(data.data.phone);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    profile();
  }, []);
  return (
    <Container>
      <Content style={styles.Container} >

        <Item style={styles.textInputContainer} >
          <Text style={{ fontSize: 20, color: "#b0b8b2" }}>نام</Text>
        </Item>
        <Item style={styles.InputContainer} >
          <Text style={{ fontSize: 20, color: "#3c423d" }}>{userInfo.first_name}</Text>
        </Item>
        <Item style={styles.textInputContainer} >
          <Text style={{ fontSize: 20, color: "#b0b8b2" }}>نام خانوادگی</Text>
        </Item>
        <Item  style={styles.InputContainer} >
          <Text style={{ fontSize: 20, color: "#3c423d" }}>{userInfo.last_name}</Text>
        </Item>
        <Item style={styles.textInputContainer} >
          <Text style={{ fontSize: 20, color: "#b0b8b2" }}>شماره تلفن</Text>
        </Item>
        <Item style={styles.textInputContainer} >
          <Text style={{ fontSize: 20, color: "#3c423d" }}>{userInfo.phone}</Text>
        </Item>
        <Button style={styles.ButtonContainer}
          onPress={()=> navigation.navigate('EditProfile')}>
          <Text >ویرایش</Text>
        </Button>
      </Content>

    </Container>
  )
}



const styles = StyleSheet.create({
  Container: {
    top: '10%',
    flex: 1,
    alignContent: 'center'
  },
  textInputContainer: {
    marginBottom: 15,
    alignItems: 'center',
    marginLeft: 10,
    borderBottomColor:'#ffffff'
  },
  InputContainer: {
    borderBottomColor:'#f0f5f1',
    borderBottomWidth:2, 
    marginBottom: 15,
    alignItems: 'center',
  },
  ButtonContainer: {
    justifyContent: 'center',
    marginTop: 25,
    width: 200,
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center'
  },

});
export default ProfileScreen;

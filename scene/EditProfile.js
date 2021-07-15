import React, { useEffect ,useState} from "react";
import { StyleSheet } from 'react-native';
import { MAIN_URL } from './../mainApi/constant';
import { Container, Content, Item, Button, Text, Input } from 'native-base';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true);

const EditProfile = ({navigation}) => {
  const [fName, setFName] = useState(null);
  const [lName, setLName] = useState(null);
  const [userInfo,setUserInfo] = useState([])
  const editProf = async () => {
    let token = await AsyncStorage.getItem("access_token");
    try {
      const response = await fetch(`${MAIN_URL}/users/self`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${ token}`
        },
        body: JSON.stringify({
          first_name: fName,
          last_name: lName
        })
      });
      const data = await response.json();
     // console.log(data)
      //if get success code
      if (data) {
        navigation.navigate("ProfileScreen")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Content style={styles.Container} >

        <Item style={styles.textInputContainer} >
          <Text style={{ fontSize: 20, color: "#b0b8b2" }}>نام</Text>
        </Item>
        <Item style={styles.InputContainer} >
          <Input
            style={{ fontSize: 20, color: "#3c423d" }}
            value={fName}
            onChangeText={
              (text) => {
                setFName(text);
              }}></Input>
        </Item>
        <Item style={styles.textInputContainer} >
          <Text style={{ fontSize: 20, color: "#b0b8b2" }}>نام خانوادگی</Text>
        </Item>
        <Item  style={styles.InputContainer} >
          <Input
            style={{ fontSize: 20, color: "#3c423d" }}
            value={lName}
            onChangeText={
              (text) => {
                setLName(text);
              }}></Input>
        </Item>
        <Button style={styles.ButtonContainer}
          onPress={editProf}>
          <Text >ذخیره تغییرات</Text>
        </Button>
        <Item style={styles.textInputContainer} >
          <Text style={{ fontSize: 10, color: "#b0b8b2" }}>
            نکته : تغییرات ذخیره نمیشود چون در
          api - last_name , first_name نداریم
         . در نتیجه به صفحه پروفایل نمیرود</Text>
        </Item>
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
    marginBottom:15,
    width: 200,
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center'
  },

});
export default EditProfile;

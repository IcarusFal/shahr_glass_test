import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { MAIN_URL } from './../mainApi/constant';
import { I18nManager } from 'react-native';
import { Button } from 'native-base';
I18nManager.forceRTL(true);

const screenWidth = Math.round(Dimensions.get('window').width);

const ProductsScreen = ({ navigation}) => {
  const [productdata,setProductData] = useState([])
const product = async () => {
    try {
      const response = await fetch(`${MAIN_URL}/products`, {
        method: 'GET'
      });
      var products = await response.json();
      setProductData(products.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    product();
  }, []);
  return (
    <View style={styles.container}>

      <View style={styles.topView}>
        <Image style={styles.topImage}></Image>
        <Button
          style={styles.topButton}
          onPress={() => navigation.navigate("ProfileScreen")}>
          <Text>پروفایل</Text></Button>
      </View>
      <View style={{ flex: 0.7 }}>
        <FlatList
          data={productdata}
          renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback>
                <View
                  //key={item.key}
                  style={{
                    marginTop: 5,
                    borderRadius: 30,
                    backgroundColor: "#f0f5f1",
                    width: screenWidth,
                    height: 300,
                    padding: 10,
                  }}>
                  <Image
                    source={item.photo}
                    style={{
                      width: screenWidth,
                      height: "75%",
                      borderRadius: 30,
                      alignSelf: 'center',
                      backgroundColor:"#A7A7A7"
                    }}></Image>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 5,
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginTop: 5,
                      color: 'black',
                    }}>
                    قیمت {item.price}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',

  },
  topView: {
    flex: 0.3,
    alignItems: 'center',
    padding: 15
  },
  topImage: {
    backgroundColor: '#124587',
    borderRadius: 100,
    width: 130,
    height: 130
  },
  topButton: {
    alignSelf: 'center',
    borderColor: "#f0f5f1",
    borderWidth: 2,
    borderRadius: 10,
    width: 70,
    height: 40,
    marginTop: 7,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  }
});

export default ProductsScreen;

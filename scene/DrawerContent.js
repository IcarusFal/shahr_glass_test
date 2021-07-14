import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {I18nManager} from 'react-native';
I18nManager.forceRTL(true);

function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        
         
          <DrawerItem
            style={{marginTop: -5}}
            labelStyle={styles.lable}
            label="پروفایل"
            onPress={() => props.navigation.navigate('profileScreen')}
           ></DrawerItem>
           <DrawerItem
            style={{marginTop: -5}}
            labelStyle={styles.lable}
            label="محصولات"
            onPress={() => props.navigation.navigate('productsScreen')}
           ></DrawerItem>
         
       
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'IRANSansMobile_Bold',
  },
  close_icon: {
    position: 'absolute',
    right: 15,
    top: 13,
  },
  lable: {
    fontFamily: 'IRANSansMobile_Bold',
    fontSize: 15,
    color: '#777777',
  },
  image: {
    alignSelf: 'flex-end',
    marginTop: 10,
    backgroundColor: 'white',
  },
});

export {DrawerContent};

import React from 'react';
import { View ,Image,StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors  from '../config/colors';
import ListItem from '../components/ListItem';
function ListingDetailsScreen(props) {
    return (
      <View>
      <Image style = {styles.image} source = {require('../assets/goggles.jpg')}/>    
      <View style ={styles.detailsContainer}>
      <AppText style = {styles.title}>Goggle </AppText>
      <AppText style= {styles.price}>200rs</AppText>
      <View style={styles.userContainer} > 
      <ListItem
      image = {require('../assets/ishu.jpg')}
      title = "Ishika Goyal"
      subTitle ="5 Listings"
      />
      </View>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer :{
      paddingLeft :15,
      paddingTop :0
    },

    image : {
        width :'100%',
        height : 250,
        marginVertical : 24,
    },
    price:{
       color :colors.secondary,
        fontWeight : "bold", 
         marginVertical:5
    },
    title :{
        fontWeight :'500',
    },
    userContainer :{
      marginVertical :40  
    }
})
export default ListingDetailsScreen;

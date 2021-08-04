import React from 'react';
import { FlatList ,StyleSheet,View} from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import Color from '../config/colors';
import colors from '../config/colors';
const listings=[
    {
    id:1,
    title:'Red jacet for Sale',
    price:100,
image:require('../assets/ishu.jpg')
    },
    {
        id:2,
        title:'beluda',
        price:100,
    image:require('../assets/ishu.jpg')
        },

]
function ListingScreen(props) {
    return (
    <Screen styles={StyleSheet.screen}>
        <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
      
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.Light,
    }
})
export default ListingScreen;
import React from 'react';
import { View ,StyleSheet,Image, TouchableHighlight} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

import AppText from './AppText';
import ListItemDeleteAction from './ListItemDeleteAction';
function ListItem({title,subTitle,image,onPress,IconComponent,handleDelete}) {
    return (
            
<Swipeable 
      // renderLeftActions ={leftSwipe}
       // renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
        renderRightActions={() => <ListItemDeleteAction onPress={handleDelete} />}
       >
       <View style ={styles.container}>
       {IconComponent}
       {image && <Image style ={styles.image} source = {image}/>}
       <View style={styles.detailsContainer}>
       <AppText style ={styles.title}>{title}</AppText>
       {subTitle &&  <AppText style ={styles.subTitle}>{subTitle}</AppText>}
       </View>
       </View> 
    </Swipeable>
     
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection :"row",
         padding :15,
        backgroundColor:Colors.white
    },
    detailsContainer:{
marginLeft:10,
justifyContent:"center"
    },
    image :{
        width :70,
        height :70,
        borderRadius:35
        
    },
    subTitle:{
      color : colors.medium
    },
    title :{
     fontWeight : '500'  
    }
});

export default ListItem;
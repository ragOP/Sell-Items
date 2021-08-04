import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
const initialMessages = [
    {
        id: 1,
        title: 'iaesfsbfksknddddddddddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaj',
        description: 'D1',
        image: require('../assets/ishu.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'zaynah isthegood ', 
        image: require('../assets/ishu.jpg')
    }
];


function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const deleteItem = message => {
        setMessages(messages.filter(m => m.id !== message.id));

    };
    return (
        <Screen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        handleDelete={()=>deleteItem(item)}
                        onPress={() => console.log("Message selected", item)}
                        // renderRightAction={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                    
                ItemSeparatorComponent={ListItemSeparator} 
                  refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require('../assets/ishu.jpg')
            },
          ]);
        }}
      />
        </Screen>
    );
}
const styles = StyleSheet.create({

})

export default MessagesScreen;
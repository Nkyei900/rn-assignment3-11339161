
import {Button} from 'react-native';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState([
    {name: 'Mobile App Development', key: '1'},
    {name: 'Web Development', key: '2'},
    {name: 'Push Ups', key: '3'},
    {name: 'Reading', key: '4'},
    {name: 'Advertisements', key: '5'},
    {name: 'Running', key: '6'},
    {name: 'Music', key: '7'},
    {name: 'Movies', key: '8'},
    {name: 'Art', key: '9'},
    {name: 'Crypto Currencies', key: '10'},
    {name: 'Affiliate Marketing', key: '11'},
    {name: 'Surveys ', key: '12'},
    {name: 'Documentation', key: '13'},
    {name: 'Registery', key: '14'},
    {name: 'Tips', key: '15'},
  ]);
  const data = [
  { id: '1', title: 'Exercise', image: require('./exercise.png') },
  { id: '2', title: 'Cooking ', image: require('./study.png') },
  { id: '3', title: 'Drawing ', image: require('./exercise.png') },
  { id: '4', title: 'Code', image: require('./exercise.png') },
  { id: '5', title: 'Washing', image: require('./study.png') },
  { id: '6', title: 'Soccer', image: require('./exercise.png') },
  { id: '7', title: 'Basketball', image: require('./exercise.png') },
  { id: '8', title: 'Games', image: require('./study.png') },
  
];
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Hello, Devs </Text>
        <View style={styles.ellipse}>
        <Image source={require('./userimage.png')} style={styles.userImage} />
        </View>
      </View>
      <View style={styles.searchFlexView}>
      <TextInput 
        style={styles.searchInput}
        placeholder={'Search...'}
      />
      <Button title="search" style={styles.sortButton} />
      </View>
      
      <Text style={styles.categories}> Categories</Text>
      <View>
        <FlatList 
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
        
        />
      </View>
      <Text style={styles.categories}> Ongoing Task</Text>
     
    <ScrollView style={{alignItems: 'center', 
    justifyContent: 'center', marginTop: 5, }}>
      {
       task.map((item2) => {
         return (
           <View key={item2.key}>
            <Text style={styles.item2}>{item2.name}</Text>
           </View>
         )
       })
      }
    </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'space-between',
    padding: 10,
  },
  
  item: {
    margin: 10,
    backgroundColor: '#ffff',
    padding: 10,
    

  },
  userImage: {
    width: 40,
    height: 30,
  },
  
  categories: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    fontFamily: 'Arial',
    marginLeft: 10,
    marginVertical: 0,
  },
  sortButton: {
    marginHorizontal: 0,
    width: 10,
    height: 10,
    
  },
  searchFlexView: {
    flexDirection: 'row',
    marginHorizontal: 15,

    
  },
  
  searchInput: {
    width: 200,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#ffff',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 15,
    outline: 'none'
  },
  numbertask: {
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
  image: {
    width: 100,
    padding: 20,
    height: 100,
    marginHorizontal: 0,
  },
  ellipse: {
    width: 38, 
    height: 38, 
    borderRadius: 50, 
    overflow: 'hidden', 
    marginLeft: 10,
  },
  leftAlignments: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 8,
  },
  rightAlignments: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'right'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffe9d2',
    
  },
  
    
  item2: {
    marginTop: 10,
    paddingHorizontal: 70,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1},
    paddingVertical: 30,
    backgroundColor: '#ffff',
    
  },
});

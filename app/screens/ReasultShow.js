import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useEffect } from 'react';
import TouchableOpacity from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import {Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const ReasultShow = ({navigation,route}) => {
    const {surveyresult} = route.params;
    const [Data, setData] = useState([]);
    const [quesionshow, setquestionshow] = useState();
    const screenWidth = Dimensions.get('window').width;



    console.log('data from Result screen..........', surveyresult);
    console.log(surveyresult.sur_id);
async function surveyView() {
  let response = await fetch(
    global.apiurl + 'student/getques1?suid=' + surveyresult.sur_id,
  );

  let json = await response.json();
  setquestionshow(json);
   for (var index = 0; index < quesionshow.length; index++) {
    console.log(index)
   }

  
  console.log("questionnnssss...............",json);
}
useEffect(() => {
  surveyView();
}, []);
    
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={quesionshow}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: 'black',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  elevation: 10,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}>
                <Text
                  style={{fontSize: 21, fontWeight: 'bold', color: '#2196f3'}}>
                  Question :{index + 1}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    padding: 3,
                    top: 1,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {item.description}
                </Text>

                <View>
                  {quesionshow && (
                    <BarChart
                    style={{borderRadius:20,right:5}}
                      data={{
                        labels: ['Yes', 'No'],
                        datasets: [
                          {
                            data: [quesionshow[index].yes, quesionshow[index].no],
                          },
                        ],
                      }}
                      // width={screenWidth}
                      width={380}
                      height={220}
                      yAxisLabel="Value "
                      chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 0,
                        color: (opacity = 2) =>
                          `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 2) =>
                          `rgba(255, 255, 255, ${opacity})`,
                        style: {
                          borderRadius: 16,
                        },
                        propsForDots: {
                          r: '8',
                          strokeWidth: '6',
                          stroke: 'darkgreen',
                        },
                      }}
                      bezier
                    />
                  )}
                </View>
              </View>
            </View>
          );
        }}>
        </FlatList>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  FlatlistContainer: {
    //backgroundColor: '#F0ECD5',
    flexDirection: 'row',
    margin: 7,
    //flex:1,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    //flexGrow:0
  },

  Text: {
    fontSize: 15,
    color: 'grey',
  },

  QRCode: {
    marginLeft: 20,
  },

  imageContainer: {
    height: 70,
    width: 77,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'red',
  },

  infoContainer: {
    marginLeft: 20,
    // flexDirection:"row",
    // width:200,
    // alignItems: 'flex-start',
    // justifyContent: "space-evenly",
    // width: 180,
    // //backgroundColor:'#F0ECD5',
  },
});
export default ReasultShow
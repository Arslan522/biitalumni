import { View, Text ,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react';
import Pie from 'react-native-pie';
import { Font } from 'react-native-paper/lib/typescript/types';
import { ScrollView } from 'react-native-gesture-handler';

const Result = ({navigation}) => {
  return (
      <ScrollView>
        <View style={{top:40}}>
        <Text style={{fontSize:28,textAlign:"center",color:"black"}}>
        ReactNative
        </Text>
        <Text style={{fontSize:24,textAlign:"left",color:"black",left:10}}>
            Question # 1:-
        </Text>
        <Text style={{fontSize:16,textAlign:"left",color:"black",left:14}}>
        Is React Native worth it in 2022
        </Text>
    </View>
    <View style={{ flexDirection: "row",top:60,left:30 }}>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#C70000',
          position: 'absolute',
          top: 24,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            NO
          </Text>
        </View>

        
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#EBD00c',
          position: 'absolute',
          top: 47,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            YES
          </Text>
        </View>
        
        
       
        <Pie
          radius={80}
          innerRadius={60}
          sections={[
            {
              id: 3,
              percentage: 30,
              color: '#C70000',
            },
            {
              id: 4,
              percentage: 70,
              color: '#EBD00c',
            },
          ]}
          dividerSize={0}
          strokeCap={'butt'}
        />
        <Text style={{ color: "black" ,left:10}}>
          Result
        </Text>
      </View>


      {/* 2nd pie */}


      <View style={{top:80}}>
        <Text style={{fontSize:24,textAlign:"left",color:"black",left:10}}>
            Question # 2:-
        </Text>
        <Text style={{fontSize:16,textAlign:"left",color:"black",left:14}}>
        Is React Native worth it in 2022
        </Text>
    </View>
    <View style={{ flexDirection: "row",top:100,left:30 }}>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#C70000',
          position: 'absolute',
          top: 24,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            NO
          </Text>
        </View>

        
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#EBD00c',
          position: 'absolute',
          top: 47,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            YES
          </Text>
        </View>
        <Pie
          radius={80}
          innerRadius={60}
          sections={[
            {
              id: 1,
              percentage: 70,
              color: '#C70000',
            },
            {
              id: 2,
              percentage: 30,
              color: '#EBD00c',
            },
          ]}
          dividerSize={0}
          strokeCap={'butt'}
        />
        <Text style={{ color: "black" ,left:10}}>
          Result
        </Text>
      </View>


{/* // 3rd pie */}


<View style={{top:110}}>
        <Text style={{fontSize:24,textAlign:"left",color:"black",left:10}}>
            Question # 3:-
        </Text>
        <Text style={{fontSize:16,textAlign:"left",color:"black",left:14}}>
        Is React Native worth it in 2022
        </Text>
    </View>
    <View style={{ flexDirection: "row",top:130,left:30 }}>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#C70000',
          position: 'absolute',
          top: 24,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            NO
          </Text>
        </View>      
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#EBD00c',
          position: 'absolute',
          top: 47,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            YES
          </Text>
        </View>

        <Pie
          radius={80}
          innerRadius={60}
          sections={[
            {
              id: 5,
              percentage: 60,
              color: '#C70000',
            },
            {
              id: 6,
              percentage: 40,
              color: '#EBD00c',
            },
          ]}
          dividerSize={0}
          strokeCap={'butt'}
        />
        <Text style={{ color: "black" ,left:10}}>
          Result
        </Text>
      </View>
      

{/* // 3rd pie */}


<View style={{top:140}}>
        <Text style={{fontSize:24,textAlign:"left",color:"black",left:10}}>
            Question # 4:-
        </Text>
        <Text style={{fontSize:16,textAlign:"left",color:"black",left:14}}>
        Is React Native worth it in 2022
        </Text>
    </View>
    <View style={{ flexDirection: "row",top:150,left:30 }}>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#C70000',
          position: 'absolute',
          top: 24,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            NO
          </Text>
        </View>      
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#EBD00c',
          position: 'absolute',
          top: 47,
          left: 175,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            YES
          </Text>
        </View>

        <Pie
          radius={80}
          innerRadius={60}
          sections={[
            {
              id: 8,
              percentage: 90,
              color: '#C70000',
            },
            {
              id: 9,
              percentage: 10,
              color: '#EBD00c',
            },
          ]}
          dividerSize={0}
          strokeCap={'butt'}/>
        <Text style={{ color: "black" ,left:10}}>
          Result
        </Text>
      </View>
      </ScrollView>
  )}


export default Result
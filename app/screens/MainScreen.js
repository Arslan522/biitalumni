import { View, Text } from 'react-native'
import * as React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, IconButton, Searchbar, TextInput } from 'react-native-paper';
import bgImage from '../assets/profile.png';
import bgImage2 from '../assets/post.jpg';
import bgImage3 from '../assets/profilepic.png'
import { ScrollView } from 'react-native';
import Tabs from './Tabs';
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyComponent from '../screens/Appbar';
import RadioButton from '../screens/RadioButtons';
import Pie from 'react-native-pie';
import { Font } from 'react-native-paper/lib/typescript/types';


const MainScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView style={{ marginRight: "1.3%", marginLeft: "1.3%" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#44Cb00',
          position: 'absolute',
          top: 24,
          left: 147,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            Easy
          </Text>
        </View>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#404eab',
          position: 'absolute',
          top: 45,
          left: 147,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            Neutral
          </Text>
        </View>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#C70000',
          position: 'absolute',
          top: 66,
          left: 147,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            Hard
          </Text>
        </View>
        <View style={{
          height: 20,
          width: 100,
          backgroundColor: '#EBDa09',
          position: 'absolute',
          top: 87,
          left: 147,
        }}>
          <Text style={{ left: 10, fontWeight: "bold" }}>
            Not Sure
          </Text>
        </View>
        <Pie
          radius={70}
          innerRadius={0}

          sections={[
            {
              id: 1,
              percentage: 10,
              color: '#C70000',
            },
            {
              id: 2,
              percentage: 20,
              color: '#44Cb00',
            },
            {
              id: 3,
              percentage: 30,
              color: '#404eab',
            },
            {
              id: 4,
              percentage: 40,
              color: '#EBD00c',
            },
          ]}
          dividerSize={0}
          strokeCap={'butt'}
        />
        <Text style={{ color: "black" }}>
          Result
        </Text>
      </View>
      <TextInput placeholder="Write post" style={{ paddingBottom: 40 }} >
      </TextInput >
      <Button mode="elevated" contentStyle=""> Post</Button>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', paddingTop: 30, maxWidth: "80%" }} >
          <Image source={bgImage3} style={styles.bgimg2} />
          <Text>
            Arslan Jamal
          </Text>
          <Text style={{ top: 13, right: 80 }}>
            12:23
          </Text>
        </View>
        <View>
          <Image source={bgImage2} style={{ width: "100%", height: 250 }} resizeMode="stretch" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <View style={{ flex: 1, height: 1.5, backgroundColor: 'darkgrey' }} />
        </View>
      </View>

      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', paddingTop: 30, maxWidth: "80%" }} >
          <Image source={bgImage} style={styles.bgimg2} />
          <Text>
            Arslan Jamal
          </Text>
          <Text style={{ top: 13, right: 80 }}>
            12:23
          </Text>
        </View>
        <View >
          <Image source={bgImage2} style={{ width: "100%", height: 250 }} resizeMode="stretch" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <View style={{ flex: 1, height: 1.5, backgroundColor: 'darkgrey' }} />
        </View>
      </View>


      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', paddingTop: 30, maxWidth: "80%" }} >
          <Image source={bgImage3} style={styles.bgimg2} />
          <Text>
            Arslan Jamal
          </Text>
          <Text style={{ top: 13, right: 80 }}>
            12:23
          </Text>
        </View>
        <View >
          <Image source={bgImage2} style={{ width: "100%", height: 250 }} resizeMode="stretch" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <View style={{ flex: 1, height: 1.5, backgroundColor: 'darkgrey' }} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  editprofilebtn: {
    left: 120,
    width: 160,
    color: 'cyan'
  },
  post: {
    borderWidth: 2,
    borderColor: 'grey',
  },
  bgimg2: {
    height: 70,
    width: 70,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'grey',
  },
})

export default MainScreen
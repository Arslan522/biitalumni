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
import MyComponent from './Appbar';

const MainScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView style={{ marginRight: "1.3%", marginLeft: "1.3%" }}>
      <View >

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
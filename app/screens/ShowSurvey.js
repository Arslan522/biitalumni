import { Alert, View } from 'react-native'
import React, { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button';
import { Button } from 'react-native-paper';
import { Text } from 'react-native-paper'
import { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { StyleSheet, SafeAreaView } from 'react-native'

const ShowSurvey = ({navigation,route}) => {
  const [surveyshow, setsurveyshow] = useState();
  const [checked, setChecked] = React.useState('first');
  const [quesionshow, setquestionshow] = useState();
  const [quesion, setquestion] = useState();
  const [radiobtnval, setradiobtnval] = useState(-1);
  var radioprops = [
    {label: 'Yes', value: 1},
    {label: 'No', value: 0},
  ];
  useEffect(() => {
    surveyView();
    QuestionsView();
  }, []);
  async function updateQues(idd,score) {
    console.log('arslan')
    let response = await fetch(
      global.apiurl +
        `student/updateQuestionByID?id=${idd}&answer=${score}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'multipart/form-data',
        },
      },
    );
    let json = await response.json();
    console.log({json});
   
  }
  const {datasurvey} = route.params;
  console.log("data from prev screen..........", datasurvey);

  async function surveyView() {
    let response = await fetch(
      global.apiurl + 'student/getques1?suid=' + datasurvey.sur_id,
    );
    
    let json = await response.json();
    setquestionshow(json);
    setArrayObj(json);
  }
  async function QuestionsView() {
    let response = await fetch(global.apiurl + 'student/getthesurvey');
    let json = await response.json();
    setsurveyshow(json);
  }
  const [studentdata, setstudentdata] = useState();
  const [evaluationData, setEvaluationData] = useState([]);
  const [FinalevaluationData, setFinalEvaluationData] = useState([]);

async function saveEvaluation() {
  let response = await fetch(global.apiurl + '/student/insertquestion ', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(FinalevaluationData),
  });
  let json = await response.json();
  console.log(FinalevaluationData);
  console.log(JSON.stringify(json));
}


  const setArrayObj = data => {
    let arr = [];
    for (let index = 0; index < data.length; index++) {
      arr.push({Qid: data[index].qid, Score: 0, Q: data[index].description});
    }
    console.log('Show Questions --- >  ', JSON.stringify(arr));
    console.log(global.suid);
    setEvaluationData(arr);
  };

  const StudentEvaluation = () => {
    let arr = [];
    for (let index = 0; index < evaluationData.length; index++) {
      let d = {
        Question: evaluationData[index].Q,
        qid: evaluationData[index].qid,
        Score: evaluationData[index].Score,
      };
      arr.push(d);
    }
    setFinalEvaluationData(arr);
    console.log('FinalevaluationData...........', FinalevaluationData);
  };
  function updateScore(qid, score, ques) {
    let arr = [];
    for (let index = 0; index < evaluationData.length; index++) {
      if (evaluationData[index].Qid === qid) {
        arr.push({qid: qid, Score: score, Q: evaluationData[index].Q});
        console.log('array..................', qid);
        console.log('array..................', evaluationData[index].Q);
        console.log('array..................', score);
      } else {
        arr.push({...evaluationData[index]});
        // console.log("evaluationData[index]",evaluationData[index]);
      }
    }
    //console.log('evaluation array --- >  ', JSON.stringify(arr));
    setEvaluationData(arr);
    // console.log("evaluationData..............",arr)
  }

  return (
    // <View>
    //       <Text style={{ fontSize: 30, left: 130, color: "black", fontWeight: "bold" }}>
    //           {global.surveytitle}
    //       </Text>
    //       <FlatList
    //       style={{backgroundColor:"white"}}
    //           data={quesionshow}
    //           // extraData = {query}
    //           // numColumns='1'

    //           renderItem={({ item }) => {
    //               value =(item.description)
    //               return (
    //                 //   < style={styles.flatListcontainer}>

    //                         <View style={{ flexDirection: "row", left: 5, bottom: 0,padding:5,marginTop:10,marginBottom:5,backgroundColor:"lightgrey" }}>

    //                       <Text style={{fontSize:20,color:"black",width:260}}>
    //                          Question:-
    //                          {"\n"}{item.description}
    //                       </Text>
    //                       <View style={{top:20,flexDirection:"row"}}>
    //                           <RadioButton
    //                               value="first"
    //                               status={checked === 'first' ? 'checked' : 'unchecked'}
    //                               onPress={(value) => setChecked('first')}
    //                           />
    //                           <Text>yes</Text>
    //                           <RadioButton
    //                               value="second"
    //                               status={checked === 'second' ? 'checked' : 'unchecked'}
    //                               onPress={() => setChecked('second')}
    //                           />
    //                           <Text>no</Text></View>
    //                       </View>

    //                 //   </View>

    //               )
    //           }}
    //       />
    // <Button
    //           onPress={addquestionView}
    //     >Submit Survey</Button>
    // </View>
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={quesionshow}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                padding: 5,
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

                <RadioForm
                  testID="data"
                  radio_props={radioprops}
                  buttonSize={15}
                  selectedButtonColor="#2196f3"
                  labelStyle={{
                    fontSize: 16,

                    color: 'black',
                    fontWeight: 'bold',
                  }}
                  initial={radiobtnval}
                  buttonColor={'grey'}
                  onPress={val => {
                updateQues(item.qid,val)
                    //updateScore(item.qid, val, item.description);
                    // console.log("val........",val);
                    // console.log("item.qid.....",item.qid);;
                  }}
                />
              </View>
            </View>
          );
        }}></FlatList>
      <View
        style={{
          flex: 0,
          alignItems: 'center',
        }}>
        <Button
          mode="contained"
          icon="content-save"
          // color="navy"
          labelStyle={{fontSize: 24, color: '#fff'}}
          onPress={() => {
           Alert.alert('Survey','successfully Sumitted',
           [
            {
              text:"OK",
              onPress:(()=>{navigation.navigate("ConductedSurveys")})
            }
           ])
          }}>
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    editprofilebtn: {
        left: 120,
        width: 160,
        color: 'cyan'
    },
    nametxt: {
        padding: 3,
        bottom: 125,
        fontSize: 13,
        left: 97,
        fontWeight: "bold",
    },
    nametxt1: {
        padding: 3,
        bottom: 132,
        fontSize: 13,
        left: 97,
        fontWeight: "bold",
    },
    bgimg1: {

        width: 400,
        height: 190,
    },
    bgimg2: {
        width: 70,
        marginTop: 70,
        height: 70,
        borderRadius: 90,
        left: 20,
        bottom: 60,
    },
    flatListcontainer: {
        alignContent: "center",
        justifyContent: "center",
        paddingTop: 10,
        left: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default ShowSurvey
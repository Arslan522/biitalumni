import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import avatarImage from '../assets/logo.png'

//global.apiUrl = 'http://192.168.100.42/FypAlumni/api/student/'




// global.aridno
// console.log('create job page', global.aridno);

 


export default function Imageppicker() {

  const [imgsrc, setImagesrc] = useState(Image.resolveAssetSource(avatarImage).uri)
  const [image, setImage] = useState({})
  const [postdiscription, setPostDescription] = useState()
  const [alumniid, setalumniid] = useState();


  console.log('Calling add item.....', global.apiUrl, JSON.stringify(image))
  async function addPost() {
    let user = {
      postdisc: postdiscription,
      alumni_id: global.aridno

    };
    const data = new FormData()
    // data.append('name', 'hello')
    data.append('PostPhoto', { uri: image.uri, type: image.type, name: image.fileName })
    let response = await fetch
      (global.apiurl + `student/addPost?postdiscription=${user.postdisc}
    &aid=${user.alumni_id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data;'
          },
          body: data
        })
    let json = await response.json()
    console.log(JSON.stringify(json))

    if (json == "Post Added") {
      alert("Post Added Successfully..")
    }
    else {
      alert('Post not found')
    }
  }

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    }
  }

  const openGallery = async () => {
    const result = await launchImageLibrary(options)
    setImagesrc(result.assets[0].uri)
    setImage(
      result.assets[0]
    )
    console.log(result)
  }
  return (
    <View>
      <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center',flexDirection:"row"}}>
        
        <Image source={{ uri: imgsrc }} style={{ width: 100, height: 100,backgroundColor:"white",borderRadius:20,right:45,borderWidth:1,borderColor:"black" }} />
        <View style={{ margintop:10,left: 5, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='select profile' onPress={openGallery} />

        <Button
        
          mode="contained"
          title='save'
          onPress={() => {
           
            addPost()
          }}/>
          </View>
         </View> 
       
    </View>
  )
}

const styles = StyleSheet.create({})



// import {launchImageLibrary} from 'react-native-image-picker'
// import { StyleSheet, Text, View ,Image ,Button } from 'react-native'
// import React,{useState} from 'react'
// import bgImage from '../assets/profilepic.png'

// const [imgsrc,setImagesrc]=useState(Image.resolveAssetSource(bgImage).uri)
// const [image,setImage]=useState({})
// const [postdiscription,setPostDescription]=useState()
// const [alumniid, setalumniid] = useState("aridno");
// global.aridno
// console.log('create job page', global.aridno);

// async function addPost(){  
  
//   console.log('Calling add item.....',addpost,global.apiUrl, JSON.stringify(image))
//   let user={
//     image:image,
//     postdisc:postdiscription,
//     alumni_id: global.aridno
    
//   };
//   const data = new FormData()
//  // data.append('name', 'hello')
//   data.append('PostPhoto',{uri:image.uri,type:image.type, name:image.fileName})
//   let response = await fetch
//     (`http://192.168.211.97/FypAlumni/api/student/addPost?postdiscription=${user.postdisc}
//     &postlike=${user.postlike}&postcomment=${user.postcomment}&aid=${user.alumni_id}`,
//     {
//       method:'POST',
//       headers:{
//           'Content-Type':'multipart/form-data;'
//       },
//       body:data
//   })
//   let json = await response.json()
//   console.log(JSON.stringify(json))
  
//   if(json=="Post Added"){
//     alert("Product Added Successfully..")
//   }
//   else{
//     alert('Post not found')
//   }
//  }


//  export default function ImagePicker() {

//   const [imgsrc,setImagesrc]=useState(Image.resolveAssetSource(bgImage).uri)
//   const [image,setImage]=useState()
  
//     const options={
//       title:'Select Image',
//       type:'library',
//       options:{
//         maxHeight:200,
//         maxWidth:200,
//         selectionLimit:1,
//         mediaType:'photo',
//         includeBase64:false
//       }
//    }
  
//     const openGallery=async ()=>{
//       const result=await launchImageLibrary(options)
//       setImagesrc(result.assets[0].uri)
//       setImage({
//         uri:result.assets[0].uri ,
//         type: result.assets[0].type, 
//         name:result.assets[0].fileName
//       })
//       console.log(result)
//   }
//     return (
//       <View>
//         <Text>Imagepicker</Text>
//         <View style={{margin:10,justifyContent:'center',alignItems:'center'}}>
//                   <Image source={{uri:imgsrc}} style={{width:100,height:100}}/>
//               </View>
//               <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
//                   <Button title='upload image' onPress={openGallery}/>
//               </View>
//       </View>
//     )
//   }
  
//   const styles = StyleSheet.create({})
  
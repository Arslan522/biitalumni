import {launchImageLibrary} from 'react-native-image-picker'
import avatarImage from '../assets/avatar.png'
import { StyleSheet, Text, View ,Image ,Button } from 'react-native'
import React,{useState} from 'react'
import {launchImageLibrary} from 'react-native-image-picker'
import avatarImage from '../assets/profile.jpg'

const [imgsrc,setImagesrc]=useState(Image.resolveAssetSource(avatarImage).uri)
const [image,setImage]=useState({})

async function addPost(){  
  console.log('Calling add item.....',Shoppno,global.user, JSON.stringify(image))
  let user={
    image:image,
    name:Name,
    price:Price,
    quantity:Quantity,
    unit_type:Unittype,
    shop_id:global.user,
    
  };
  const data = new FormData()
 // data.append('name', 'hello')
  data.append('PostPhoto',{uri:image.uri,type:image.type, name:image.fileName})
  let response = await fetch
    (`http://192.168.211.97/FypAlumni/api/student/addPost?postdiscription=${user.postdisc}
    &postlike=${user.postlike}&postcomment=${user.postcomment}&aid=${user.alumni_id}`,
    {
      method:'POST',
      headers:{
          'Content-Type':'multipart/form-data;'
      },
      body:data
  })
  let json = await response.json()
  console.log(JSON.stringify(json))
  
  if(json=="Post Added"){
    alert("Product Added Successfully..")
  }
  else{
    alert('Post not found')
  }
 }


 export default function ImagePicker() {

  const [imgsrc,setImagesrc]=useState(Image.resolveAssetSource(avatarImage).uri)
  const [image,setImage]=useState()
  
    const options={
      title:'Select Image',
      type:'library',
      options:{
        maxHeight:200,
        maxWidth:200,
        selectionLimit:1,
        mediaType:'photo',
        includeBase64:false
      }
   }
  
    const openGallery=async ()=>{
      const result=await launchImageLibrary(options)
      setImagesrc(result.assets[0].uri)
      setImage({
        uri:result.assets[0].uri ,
        type: result.assets[0].type, 
        name:result.assets[0].fileName
      })
      console.log(result)
  }
    return (
      <View>
        <Text>Imagepicker</Text>
        <View style={{margin:10,justifyContent:'center',alignItems:'center'}}>
                  <Image source={{uri:imgsrc}} style={{width:100,height:100}}/>
              </View>
              <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                  <Button title='upload image' onPress={openGallery}/>
              </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({})
  
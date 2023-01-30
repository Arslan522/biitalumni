import { View, Text } from 'react-native'
import React, { useState } from 'react'

const JobDetail = () => {
    const [title,settitle]=useState();
    const [description, setdescription] = useState();
    const [cgpa, setcgpa] = useState();
    const [platform, setplatform] = useState();
    const [city, setcity] = useState();
    const [title, settitle] = useState();
    const [getdata, setdata] = useState()
        // const [imgsrc, setImagesrc] = useState(Image.resolveAssetSource(avatarImage).uri)
        // const [image, setImage] = useState({})
        useEffect(() => {
            ViewJobs()
        }, [])
        //console.log("Products shown here",getProduct)

        async function ViewJobs() {
            //  let id = await AsyncStorage.getItem("userId")
            let response = await fetch
                (global.apiurl + 'student/getthejobs')

            let json = await response.json();
            console.log(JSON.stringify(json));
            setdata(json);

            //console.log("this wil  show profile...............",global.apiurl +'student/getalumni',json)
        }
        console.log(global.aridno)
        return(
            <View>
            <Text style={{ color: 'black', fontSize: 18}} >Title : {item.job_title}</Text>
                  <Text style={{ color: 'black', fontSize: 17}}>City  : {item.city}</Text>
       </View> )
}

export default JobDetail
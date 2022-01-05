import axios from "axios";


const success=async (pos) =>{

  var crd = await pos.coords;


 ipLookUp()

}

navigator.geolocation.getCurrentPosition(success, error);

const getAddress = async (latitude, longitude) => {

    let address;
  console.log((latitude, longitude))
  await axios
    .post(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        "5.5502" +
        "," +
        "-0.2174" +
        "&key=" +
        "AIzaSyBz1gdUawWEWmItKcNVDK8qQ5OYm9FUGag"
    )
    .then(async(response) => {
         address = await response.data
        // console.log("Exact Location",address)
        
    })
    .catch((err) => {
      console.log(err);
    });
        console.log(address.results)
    return address.results[0]

   
};



const ipLookUp= async ()=> {
    let Location;
  await  axios
    .get("http://ip-api.com/json/")
    .then((response) => {
  Location = response.data
    //   console.log("User's Location Data is ", response);
    //   console.log("User's Country", response.data.country);

    })
    .catch((err) => {
      console.log("ytess");
      console.log(err);
      console.log(err.response);
    });
console.log(Location)

    return Location
}





function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  ipLookUp()
}


export { ipLookUp,getAddress}
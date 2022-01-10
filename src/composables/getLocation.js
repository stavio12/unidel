import axios from "axios";


const success=async (pos) =>{

  var crd = await pos.coords;


 ipLookUp()

}

navigator.geolocation.getCurrentPosition(success, error);

const getAddress = async (latitude, longitude) => {

    let address;
  console.log((latitude, longitude))
  // 5.597126798603674, -0.22305962851579997 GTUC
  // 5.650732791844352, -0.19543079805337787 legon
  await axios
    .post(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        "5.597126" +
        "," +
        "-0.22305" +
        "&key=" +
        process.env.VUE_APP_GEO_LOCATION_API
    )
    .then(async(response) => {
         address = await response.data
        // console.log("Exact Location",address)
        
    })
    .catch((err) => {
      console.log(err);
    });
        console.log(address.results)
    return address.results[1]

   
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
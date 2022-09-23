import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../Services/axios";
import { setPlanet } from "../../Store/PlanetSlice";

export default function FirebaseFunction() {
// const [planet, setPlanets] = useState([]);
const dispatch = useDispatch();
  
  useEffect(() => {
  
    client.get("/planets.json")
    .then(response=>{
      console.log("response",response.data)
      let array=[];
      for (let key in response.data) {
        array.push(response.data[key]);
      
      }
    //   setPlanets(array);
    dispatch(setPlanet(array));
    })
   
  }, [dispatch])
}
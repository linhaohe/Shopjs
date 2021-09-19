import React,{useState,useEffect,useCallback} from "react";
import Navbar from "../components/Navbar";
import Filterbar from "../components/Filterbar";
import Itemwall from "../components/Itemwall";
import Box from '@material-ui/core/Box';

function App() {
    const [items,setItems] = useState([]);
    const [fetchUrl,setFetchUrl] = useState('https://fakestoreapi.com/products?limit=20');
    useEffect(()=>{
        fetchItems();
    },[fetchUrl]);
    const fetchItems = useCallback(async()=>{
        await fetch(fetchUrl)
       .then(res=>res.json())
       .then(json=>setItems(json))
       console.log("I am fetching")
   },[fetchUrl])
    return (
        <div>
            <Navbar />
            <Box display="flex" flexDirection="row" p={1}>
                <Box>
                <Filterbar setFetchUrl={setFetchUrl}/>
                </Box>
                <Box>
                <Itemwall items={items}/>
                </Box>
            </Box>
        </div>
    )
}

export default App;

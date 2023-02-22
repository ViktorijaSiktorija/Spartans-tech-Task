import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import debounce from "lodash.debounce";

function Joke() {
  const [setup, setSetup] = useState("");
  const [delivery, setPunchline] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const locationObj = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(locationObj.search);
    const setupParam = queryParams.get("setup");
    const punchlineParam = queryParams.get("delivery");
    setSetup(setupParam || "");
    setPunchline(punchlineParam || "");
  }, [locationObj]);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (setup) {
      queryParams.set("setup", setup);
    }
    if (delivery) {
      queryParams.set("delivery", delivery);
    }
    navigate({ search: queryParams.toString() });
  }, [setup, delivery, navigate]);

  const getJoke = debounce(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
      setSetup(response.data.setup);
      setPunchline(response.data.delivery);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); 
    }
  }, 500);

  return (
    <div style={{ padding: 20, marginLeft: 250, marginRight: 900, marginTop: 30, border: '3px solid', borderRadius: '25px', textAlign: 'center', borderColor: '#E5E0FF'}}>
      <h1 style={{ padding: 20, marginLeft: 20, color: '#060047'}}  >JOKES GENERATOR</h1>
      <div>
        <button style={{  borderRadius: 25, height: 49, width: 200, backgroundColor: '#7DB9B6', color: 'white', border: 'solid transparent', cursor: 'pointer', fontFamily: 'Verdana' }} 
        onClick={getJoke} disabled={isLoading}>
          {"GET A JOKE"}
        </button>
      </div>
      <div style={{ padding: 20 }}>
        <p>{setup}</p>
        <p >{delivery}</p>
      </div>
    </div>
  );
}

export default Joke;

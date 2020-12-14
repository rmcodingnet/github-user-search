import React, { useState } from 'react';
import Search from './Search/Search';
import SearchButton from './Search/SearchButton/SearchButton';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom'

const Form = (props) => {

    console.log("props =" );
    console.dir(props);

    const [gotData, setGotData] = useState(null)

const handleButtonClick =( () => {
    //alert("https://api.github.com/search/users?q=" + props.sItems.searchVal)
    fetch("https://api.github.com/search/users?q=" + props.sItems.searchVal)
        .then(response => response.json())
        .then(data => {
            console.dir(data)
            setGotData(true)
            return props.updateResponseData({response: data})
        })
  }) 
  
  const handleSearch = ( (event) => {
    //alert("In handleSearch Function")
    props.updateSearch({searchVal: event.target.value})
  }) 


  if(gotData) {
      return (<Redirect to="/list" />) 
  }

    return (
        <Grid style={{marginTop: "20%"}}
        container 
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center">
            <Grid item xs={3}>
                <Search searchEntered={handleSearch} /> 
                <SearchButton  clicked={handleButtonClick}/>
                
            </Grid>
        </Grid>
    );
};

export default Form;
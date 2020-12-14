import React from 'react';

import { TextField } from '@material-ui/core'

const Search = (props) => {
    return (
        <TextField style={{paddingRight: "10px"}} label="Search Github Users" variant="outlined" onChange={props.searchEntered}/>
    );
};

export default Search;
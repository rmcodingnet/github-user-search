import React from 'react';
import {Button} from '@material-ui/core';

const SearchButton = (props) => {
    return (
        <Button onClick={props.clicked} style={{marginTop: "10px"}} variant="contained" color="primary">Search</Button>
    );
};

export default SearchButton;
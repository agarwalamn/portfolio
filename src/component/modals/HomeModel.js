import React from 'react';
import Button from '@material-ui/core/Button';
import {MDBIcon} from 'mdbreact';
import '../css/style.css'
import Tooltip from '@material-ui/core/Tooltip';



export default function HomeDialog() {


  const handleClickOpen = () => {
    window.location.href="/";
  };


  return (
    <div>
    <Tooltip title="Home" placement="right">
      <Button onClick={handleClickOpen} className="list-group-item">
         <MDBIcon icon="ghost" />
      </Button>
    </Tooltip>
    </div>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {MDBIcon} from 'mdbreact';
import '../css/style.css'
import Tooltip from '@material-ui/core/Tooltip';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Tooltip title="React me" placement="right">
      <Button onClick={handleClickOpen} className="list-group-item">
         <MDBIcon icon="at" />
      </Button>
        </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"

             
      >
        <div className="aboutModal">
            <div className="header">
                <span>kira@social:~</span>
            <div
                color="danger" 
                onClick={handleClose}
                className="aBtnCls"
            >
            <span>x</span>  
            </div>
            </div>
                <div className="aboutContent">
                    <p>$ sudo hello </p>
                    <p>$ I'm Aman Agarwal</p>
                    <p>$ sudo Social</p>
                    <p> 
                        <a href="https://github.com/agarwalamn"><MDBIcon fab icon="github" /></a>
                        <a href="https://www.instagram.com/agarwal_amn/"><MDBIcon fab icon="instagram" /></a>
                        <a href="https://www.linkedin.com/in/aman-agarwal-44b245147"><MDBIcon fab icon="linkedin" /></a>
                        <a href="https://www.hackerrank.com/agarwal_aman_"><MDBIcon fab icon="hackerrank" /></a>
                        <a href="https://www.codechef.com/users/agarwal_aman_"><MDBIcon icon="code" /> </a>
                    </p>
                </div>
            </div>
      </Dialog>
    </div>
  );
}

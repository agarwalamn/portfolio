import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {MDBIcon} from 'mdbreact';
import '../css/style.css'
import Tooltip from '@material-ui/core/Tooltip';
import FolderIcon from '@material-ui/icons/Folder';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import Project from '../../data/projects'


function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function ProjectDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Tooltip title="My Experiments" placement="right">
      <Button onClick={handleClickOpen} className="list-group-item">
         <MDBIcon icon="diagnoses" />
      </Button>
        </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        fullWidth="True"
      >
        <div className="aboutModal">
            <div className="header">
                <span>kira@project:~</span>
            <div
                color="danger" 
                onClick={handleClose}
                className="aBtnCls"
            >
            <span>x</span>  
            </div>
            </div>
            <div className="projectArea row">
                {
                    Project.map((data)=>(
                        <div className="col-sm-3" key={data.id}>
                            <a href={data.url}>
                            <FolderIcon className="ic"></FolderIcon>
                            <p>{data.name}</p>
                            </a>
                        </div>
                    ))
                }
                
                <div className="col-sm-3">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2017bcs032@sggs.ac.in&su=Let's work on my awesome project&body=Hello Aman," style={{color: "rgb(43, 255, 0)"}}>
                <CreateNewFolderIcon className="ic"></CreateNewFolderIcon>
                <p>add new project ^_^</p>
                </a>
                </div>
            </div>
            </div>
      </Dialog>
    </div>
  );
}

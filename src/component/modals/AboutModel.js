import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {MDBIcon} from 'mdbreact';
import '../css/style.css'
import Tooltip from '@material-ui/core/Tooltip';
import SaveIcon from '@material-ui/icons/Save';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function AboutDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Tooltip title="my secret" placement="right">
      <Button onClick={handleClickOpen} className="list-group-item">
         <MDBIcon icon="user-secret" />
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
                <span>kira@about:~</span>
              <div
                  color="danger" 
                  onClick={handleClose}
                  className="aBtnCls"
              >
                <span>x</span>  
              </div>
            </div>
            <div className="content">
              <div>
              <p>$ ...Hello...</p>
              <p>$ I'm Aman Agarwal</p>
              <p>$ I'm a student who loves to make web apps and solve problems!</p>
              <p>$ .......</p>
              <p>$ sudo achivements</p>
              <p>\\ Compleated Hacktober fest and got a T-shirt(you will find image on insta soon):)</p>
              <p>\\ Completed 5 or 5+ stars on hackerrank on various topics</p>
              <p>\\ Regular participation in codechef competitions</p>
              <p>\\ checkout my resume to know more! ^C</p>
              <p>$ sudo resume</p>
              <p>
              <Button variant="outlined" className="RsmBtn" size="large" startIcon={<SaveIcon />}>
                Resume
              </Button> {"~checkout to know more~"}
              </p>
              <p className="msgText">~~ pssh have you tried dragging the modals?</p>
              </div>
            </div>
      </div>
           
      </Dialog>
    </div>
  );
}




// import React, { Component } from 'react'
// import { MDBContainer,  MDBModal ,MDBIcon} from 'mdbreact';
// import '../css/style.css';

// export default class AboutModel extends Component {
//     render() {
//         return (
//             <MDBContainer>
//         <MDBModal 
//         isOpen={this.props.open} 
//         backdrop={false}
//         style={{position:"absolute"}}
//         >
//         <div className="aboutModal">
            
//             <div className="header">
//             <span>kira@about:~</span>
//                 <div
//                 color="danger" 
//                 onClick={this.props.handler}
//                 className="aBtnCls"
//                 >
//                 <span>x</span>  
//                 </div>
//             </div>
//             <div className="aboutContent">
//                 <p>$ sudo hello </p>
//                 <p>$ I'm Aman Agarwal</p>
//                 <p>$ sudo Social</p>
//                 <p> 
//                     <a href="https://github.com/agarwalamn"><MDBIcon fab icon="github" /></a>
//                     <a href="https://www.instagram.com/agarwal_amn/"><MDBIcon fab icon="instagram" /></a>
//                     <a href="https://www.linkedin.com/in/aman-agarwal-44b245147"><MDBIcon fab icon="linkedin" /></a>
//                     <a href="https://www.hackerrank.com/agarwal_aman_"><MDBIcon fab icon="hackerrank" /></a>
//                     <a href="https://www.codechef.com/users/agarwal_aman_"><MDBIcon icon="code" /> </a>
//                 </p>
//             </div>
//         </div>
//         </MDBModal>
      
//       </MDBContainer>
//         )
//     }
// }

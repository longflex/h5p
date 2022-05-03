import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

import { AiOutlinePlusCircle, AiFillFolderOpen, AiOutlineCloudUpload } from "react-icons/ai";

export default function Barapp() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar fixed='top' style={{marginTop: '40px',boxShadow: '0px 2px 6px #969ba1'}}  expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBBtn color='secondary' style={{width: '200px'}} className='mr-2'  ><AiOutlineCloudUpload /> Upload Logo </MDBBtn>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          

          <MDBBtn color='primary' style={{width: '200px'}} className='mx-2' ><AiOutlinePlusCircle /> Add Content </MDBBtn>
          <MDBBtn color='secondary' style={{width: '200px'}} className='mx-2' ><AiFillFolderOpen /> New Folder </MDBBtn>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
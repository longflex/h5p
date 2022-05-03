import React, { useState } from 'react';
import '../App.css';

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
import { BiUserCircle, } from "react-icons/bi";

export default function Barapp() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar fixed='top' className='nav-body' expand='lg' light>
      <MDBContainer fluid>
        <MDBNavbarBrand className='nav-text' href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav right fullWidth={false} className='ms-auto mb-0 mb-lg-0' style={{fontSize: '12px'}}>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav-text' href='#'>
                Manage Content
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav-text' href='#'>Manage Organization</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link nav-text'>
                  <BiUserCircle style={{width: '2em', height: '2em'}} />
                  Jayanthi Raja
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{ zIndex: '1031' }}>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Another action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem style={{backgroundColor: 'blue'}}>
              <MDBNavbarLink className='nav-text' href='#'> <AiOutlinePlusCircle style={{width: '2em', height: '2em'}} /> Add Content</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
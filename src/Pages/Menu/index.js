import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggle = () => setIsOpen(!isOpen);


    var login_status = [];
    login_status = sessionStorage.getItem("usuario");
    var url_login = '';
    var status_string = '';


/* verificando sessão */
    if(login_status==null){
         status_string = 'Fazer Login'
         url_login ='/logar'
    }else{
        status_string = 'Fazer Logout'
        url_login ='/deslogar'
    }

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Solar</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/buscar-id">Buscar por Id</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/buscar-atendimentos">Buscar Atendimento</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Perfil
                            </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem href="/teste">Dados Pessoais</DropdownItem>
                                        <DropdownItem>Configurações</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem> Teste 1</DropdownItem>
                                    </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink href={url_login}>{status_string}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;
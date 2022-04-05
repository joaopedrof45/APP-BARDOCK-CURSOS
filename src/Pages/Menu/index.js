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
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;
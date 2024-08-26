import {FC} from "react";
import {Container, Navbar} from "react-bootstrap";
import Link from "next/link";

const Menu: FC = () => {

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link legacyBehavior={true} href={"/"} passHref>
                        <Navbar.Brand>Hřiště Veselice</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle/>
                    {/*<Navbar.Collapse className="justify-content-end">*/}
                    {/*    <Nav className="me-auto">*/}
                    {/*        <Link legacyBehavior={true} href={"/info"} passHref>*/}
                    {/*            <Nav.Link>Info</Nav.Link>*/}
                    {/*        </Link>*/}
                    {/*    </Nav>*/}
                    {/*</Navbar.Collapse>*/}
                </Container>
            </Navbar>
        </Container>
    )
};


export default Menu;

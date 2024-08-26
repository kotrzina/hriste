import type {NextPage} from 'next'
import {Alert, Button, Card, Col, Row} from "react-bootstrap";
import Head from "next/head";
import {useRouter} from "next/router";

const Home: NextPage = () => {

    const router = useRouter()

    const vavrinecURL = "https://www.vavrinec.cz/obec/volny-cas/rezervace/viceucelove-hriste-ve-veselici/rezervace/?kalendar_id=1&step=2"

    return (
        <>
            <Head>
                <title>Hřiště Veselice</title>
            </Head>

            <Row>
                <Col md={12} className={"mt-2"}>
                    <Alert variant={"success"}>
                        <Alert.Heading>Nový rezervační systém</Alert.Heading>
                        <p>
                            V rámci vybudovaní nového multifunkčního hřiště ve Vavřinci obec spustila nový rezervační
                            systém i pro hřiště ve Veselici.
                        </p>
                        <hr/>
                        <div className="d-flex">
                            <Button href={vavrinecURL} variant="outline-success">
                                Pokračovat do nového systému
                            </Button>
                        </div>
                    </Alert>
                </Col>
            </Row>

            <Row>

                <Col md={12}>
                    <h2>Turnaje:</h2>
                </Col>

                <Col md={3}>
                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title>Tenis SINGL 2024</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li><strong>24. - 25. 8. 2024</strong></li>
                                    <li>7 hračů</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant={"success"} onClick={() => {
                                router.push("/turnaj/2024-singl")
                            }}>
                                Detail
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title>Tenis DEBL 2023</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li><strong>12. 8. 2023</strong></li>
                                    <li>6 týmů</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant={"success"} onClick={() => {
                                router.push("/turnaj/2023-debl")
                            }}>
                                Detail
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    )
}


export default Home

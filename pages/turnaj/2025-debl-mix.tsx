import {NextPage} from "next";
import {useRouter} from "next/router";
import {Button, Col, Row} from "react-bootstrap";
import Head from "next/head";

const Debl2025: NextPage = () => {

    const router = useRouter()

    return (
        <Row>
            <Head>
                <title>Tenisový turnaj čtyřher - 16. 8. 2025 - Hřiště Veselice</title>
            </Head>


            <Col md={12}>
                <h1>Tenisový turnaj MIX čtyřher - 16.&nbsp;8.&nbsp;2025</h1>
                <p>
                    V sobotu 16. srpna 2025 se uskuteční tenisový turnaj. Herní systém bude trošku nezvyklý, protože se
                    sice bude jednat o čtyřhry, ale nebudete mít svého partnera. Každý hráč bude opakovaně nastupovat na
                    hřiště k odehrání 4 gemů. V praxi to znamená, že po každém odehraném gemu jeden hráč z kurtu odejde
                    a bude nahrazen dalším hráčem. Tímto způsobem se vystřídají všichni hráči a každý si zahraje. Cílem
                    je, aby všichni hráči měli odehraný stejný počet gemů. Vítězem se pak stane hráč s nejvyšším počtem
                    vyhraných gemů.
                </p>
            </Col>
            <Col md={4}>
                <h3>Pravidla</h3>
                <p>
                    <ul>
                        <li><strong>Datum:</strong> 📅 16.&nbsp;8.&nbsp;2025</li>
                        <li><strong>Turnajový systém:</strong> ⚙️ DEBL MIX</li>
                        <li><strong>Startovné:</strong> 💸 příspěvek na jídlo a pití</li>
                        <li><strong>Pricepool:</strong> 💰 čest a sláva</li>
                    </ul>

                </p>
            </Col>
            <Col md={4}>

                <h4>Registrace</h4>
                <ul>
                    <li><strong>Tomáš Kozák</strong></li>
                    <li><strong>Telefon:</strong> 730 996 957</li>
                    <li><strong>Email:</strong> kozak@talko.cz</li>
                </ul>

            </Col>
            <Col md={4}>
                <h4>Registrovaní</h4>
                <ul>
                    <li><strong>Tomáš Kozák</strong></li>
                </ul>
            </Col>
            <Col md={12}>

                <h4>Herní příklad:</h4>

                <p>
                    Na kurtu hrají 4 hráči. Já mám ze všech odehráno nejméně setů, tudíž po dokončení aktuálního gemu
                    nastupuji na hřiště. Budu sřídat hráče, které aktuálně podává. Nastupuji tedy k odehrání 4 gemů.
                </p>

                <ul>
                    <li>V 1. gemu podává jeden ze soupeřů, který po gemu vystřídá</li>
                    <li>Ve 2. gemu podává můj spoluhráč a po gemu vystřídá (ano, dostávám nového spoluhráče)</li>
                    <li>Ve 3. gemu podává soupeř, který je na kurtu déle. Po gemu samozřejmně střídá</li>
                    <li>Ve 4. gemu podávám já a po gemu střídám</li>
                    <li><strong>POČET VYHRANÝCH GEMŮ NAHLÁSÍM!</strong></li>
                    <li>Čekám, až na mě zase příjde řada</li>
                </ul>
            </Col>


            <Col md={12}>
                <Button
                    variant={"outline-dark"}
                    className={"mb-3 mt-3"}
                    onClick={() => {
                        router.push("/")
                    }}
                >Zpět
                </Button>


            </Col>
        </Row>
    )
};

export default Debl2025;

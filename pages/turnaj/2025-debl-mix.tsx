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
                        <li><strong>Datum:</strong> 📅 16.&nbsp;8.&nbsp;2025 od 15:00</li>
                        <li><strong>Prezence:</strong> 🏎️ do 14:00</li>
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
                    <li>do 15. 8.</li>
                </ul>

            </Col>
            <Col md={4}>
                <h4>Registrovaní</h4>
                <Button
                    variant={"success"}
                    size={"sm"}
                    href={"https://docs.google.com/spreadsheets/d/15I_DpUNiBSf_b6LISI3zzOALb93FNVoS_EyTv8I5Fik/edit?usp=sharing"}
                    target={"_blank"}>
                    Google Sheet
                </Button>
            </Col>
            <Col md={12}>

                <h4>Herní příklad:</h4>

                <p>
                    Na kurtu hrají 4 hráči. Já mám ze všech odehráno nejméně gemů, tudíž po dokončení aktuálního gemu
                    nastupuji na hřiště. Budu sřídat hráče, které aktuálně podává. Nastupuji tedy k odehrání 4 gemů.
                </p>

                <ul>
                    <li>V 1. gemu podává <strong>jeden ze soupeřů</strong>, který po gemu vystřídá</li>
                    <li>Ve 2. gemu podává <strong>můj spoluhráč</strong> a po gemu vystřídá (ano, dostávám nového
                        spoluhráče)
                    </li>
                    <li>Ve 3. gemu <strong>podává soupeř</strong>, který je na kurtu déle. Po gemu samozřejmně střídá
                    </li>
                    <li>Ve 4. gemu <strong>podávám já</strong> a po gemu střídám</li>
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

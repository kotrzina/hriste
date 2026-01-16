import {NextPage} from "next";
import {useRouter} from "next/router";
import {Button, Col, Row, Table} from "react-bootstrap";
import Head from "next/head";
import Medal from "../../components/Medal";

const Debl2025: NextPage = () => {

    const router = useRouter()

    const standings = [
        {name: "Pavel Kratky", wins: 11, games: 13},
        {name: "Tomas Odstrčil", wins: 18, games: 23},
        {name: "Tomáš Kozák", wins: 16, games: 24},
        {name: "Honza Hebelka", wins: 13, games: 22},
        {name: "Pavel Stloukal", wins: 14, games: 24},
        {name: "Josef Jarůšek", wins: 6, games: 17},
        {name: "Martin Nečas", wins: 6, games: 24},
        {name: "Tomáš Hebelka", wins: 0, games: 4},
    ]

    return (
        <Row>
            <Head>
                <title>Tenisový turnaj čtyřher - 16. 8. 2025 - Hřiště Veselice</title>
            </Head>


            <Col md={12}>
                <h1>Tenisový turnaj MIX čtyřher - 16.&nbsp;8.&nbsp;2025</h1>
                <p>
                    V sobotu 16. srpna 2025 se uskutečnil tenisový turnaj. Herní systém byl trošku nezvyklý, protože se
                    sice jednalo o čtyřhry, ale hráči neměli svého partnera. Každý hráč opakovaně nastupoval na
                    hřiště k odehrání 4 gemů. V praxi to znamenalo, že po každém odehraném gemu jeden hráč z kurtu odešel
                    a byl nahrazen dalším hráčem. Tímto způsobem se vystřídali všichni hráči a každý si zahrál. Cílem
                    bylo, aby všichni hráči měli odehraný stejný počet gemů. Vítězem se stal hráč s nejvyšším procentem
                    vyhraných gemů.
                </p>
                <hr/>
            </Col>

            <Col md={6}>
                <h3>Výsledky</h3>
                <ol>
                    <li><Medal type={"gold"}/> <strong>Pavel Kratky</strong></li>
                    <li><Medal type={"silver"}/> <strong>Tomas Odstrčil</strong></li>
                    <li><Medal type={"bronze"}/> <strong>Tomáš Kozák</strong></li>
                    <li><strong>Honza Hebelka</strong></li>
                    <li><strong>Pavel Stloukal</strong></li>
                    <li><strong>Josef Jarůšek</strong></li>
                    <li><strong>Martin Nečas</strong></li>
                    <li><strong>Tomáš Hebelka</strong></li>
                </ol>
            </Col>

            <Col md={12}>
                <h3>Tabulka</h3>
                <Table bordered={true} responsive={true} className={"results"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Hráč</th>
                        <th title={"Vyhráno"}>W</th>
                        <th title={"Odehráno"}>G</th>
                        <th>%</th>
                    </tr>
                    </thead>
                    <tbody>
                    {standings.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}.</td>
                            <td><strong>{player.name}</strong></td>
                            <td>{player.wins}</td>
                            <td>{player.games}</td>
                            <td>{Math.round(player.wins / player.games * 100)}%</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
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

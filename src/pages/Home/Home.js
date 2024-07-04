import styles from "./Home.module.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <h2>Tipos de Plantas</h2>
                        <ul>
                            <li><strong>Plantas Ornamentais:</strong> Essas plantas são cultivadas principalmente pela sua aparência estética. Exemplos incluem orquídeas, rosas e tulipas.</li>
                            <li><strong>Plantas Medicinais:</strong> Utilizadas para fins terapêuticos, como a camomila, que é conhecida por suas propriedades calmantes.</li>
                            <li><strong>Plantas Alimentícias:</strong> Estas plantas são cultivadas para consumo humano e animal. Exemplos incluem trigo, arroz e milho.</li>
                            <li><strong>Plantas Aquáticas:</strong> Vivem na água ou em áreas muito úmidas. Exemplos incluem a vitória-régia e o lírio-do-brejo.</li>
                        </ul>
                    </div>
                    <div className={styles.gridItem}>
                        <h2>Cuidados com as Plantas</h2>
                        <p>Para manter suas plantas saudáveis e vibrantes, é importante seguir algumas práticas básicas de cuidado:</p>
                        <ol>
                            <li><strong>Rega:</strong> A quantidade de água varia de acordo com a espécie, mas é fundamental regar regularmente, evitando tanto o excesso quanto a falta de água.</li>
                            <li><strong>Exposição ao Sol:</strong> Certas plantas necessitam de mais luz solar do que outras. Pesquise sobre as necessidades específicas da sua planta.</li>
                            <li><strong>Adubação:</strong> Fornecer nutrientes através de adubos orgânicos ou químicos pode promover um crescimento saudável.</li>
                            <li><strong>Poda:</strong> A poda regular ajuda a manter a forma da planta e a estimular o crescimento de novos brotos.</li>
                            <li><strong>Proteção contra Pragas:</strong> Monitorar suas plantas e tratar imediatamente qualquer sinal de pragas é essencial para evitar danos.</li>
                        </ol>
                    </div>
                    <div className={styles.gridItem}>
                        <h2>Benefícios das Plantas</h2>
                        <p>As plantas não apenas embelezam nossos ambientes, mas também oferecem vários benefícios, tais como:</p>
                        <ul>
                            <li><strong>Purificação do Ar:</strong> Muitas plantas ajudam a remover toxinas do ar e a melhorar a qualidade do ar em ambientes internos.</li>
                            <li><strong>Redução do Estresse:</strong> Estar perto de plantas pode ajudar a reduzir os níveis de estresse e promover um senso de bem-estar.</li>
                            <li><strong>Saúde Mental:</strong> O cuidado com as plantas pode ser uma atividade relaxante e gratificante, contribuindo para a saúde mental positiva.</li>
                            <li><strong>Sustentabilidade:</strong> Plantas nativas e bem-adaptadas podem ajudar a conservar água e a apoiar a vida selvagem local.</li>
                        </ul>
                    </div>
                    <div className={styles.gridItem}>
                        <h2>Secagem de Plantas</h2>
                        <p>A secagem de plantas é uma técnica útil para preservar flores, folhas e ervas. Aqui estão alguns métodos comuns:</p>
                        <ul>
                            <li><strong>Secagem ao Ar:</strong> Pendure as plantas de cabeça para baixo em um local seco e escuro. Este método é ideal para flores e ervas.</li>
                            <li><strong>Secagem com Sílica Gel:</strong> Coloque as plantas em um recipiente fechado com sílica gel para absorver a umidade rapidamente. Este método é ótimo para flores delicadas.</li>
                            <li><strong>Secagem com Prensa:</strong> Coloque as plantas entre folhas de papel e pressione-as com um peso. Este método é frequentemente usado para folhas e flores finas.</li>
                            <li><strong>Secagem no Micro-ondas:</strong> Use o micro-ondas para secar rapidamente flores pequenas. Coloque as plantas entre folhas de papel toalha e aqueça em intervalos curtos.</li>
                        </ul>
                        <p>Independentemente do método escolhido, é importante garantir que as plantas estejam completamente secas antes de armazená-las para evitar mofo e deterioração.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
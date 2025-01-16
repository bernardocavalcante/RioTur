import React, { useState } from "react"; // Importa React e o hook useState para gerenciar o estado
import "./App.css"; // Importa o arquivo de estilos
import ToggleSwitch from "./ToggleSwitch"; // Importa o componente ToggleSwitch para alternar o Dark Mode
import ProgressBar from "./ProgressBar"; // Importa o componente ProgressBar para exibir a barra de progresso

function App() {
  // Estado para controlar o modo escuro ou claro
  const [darkMode, setDarkMode] = useState(false);

  // Estado para controlar o slide atual no carrossel do Maracanã
  const [currentSlide, setCurrentSlide] = useState(0);

  // Estado para controlar o slide atual no carrossel da Catedral
  const [currentSlideCathedral, setCurrentSlideCathedral] = useState(0);

  // Array de URLs de imagens para o carrossel do Maracanã
  const maracanaImages = [
    "https://imagens.ebc.com.br/pfvme-yPKPipeKJZPk02DK3diCU=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/estadio_do_maracana2002140424.jpg?itok=kuNV9JxX",
    "https://chutedeplaca.com.br/wp-content/uploads/2024/07/reforma-do-gramado-do-maracana-prepara-estadio-para-maratona-de-jogos-ate-agosto-1200x900.webp",
    "https://ogimg.infoglobo.com.br/in/13258909-5c5-3ef/FT1086A/2014-733637404-20140713235503561afp.jpg_20140713.jpg",
    "https://colunadofla.com/wp-content/uploads/2015/06/maraca-new.jpg",
  ];

  // Array de URLs de imagens para o carrossel da Catedral
  const cathedralImages = [
    "https://lulacerda.ig.com.br/wp-content/uploads/2023/01/Catedral.jpg",
    "https://s2rio.com.br/wp-content/uploads/2015/04/passeio-ao-cristo-redentor-catedral-de-sao-sebastiao-noite-640x640.jpg",
    "https://media.istockphoto.com/id/1469499381/pt/foto/metropolitan-cathedral-of-saint-sebastian-rio-de-janeiro-brasil.jpg?s=612x612&w=0&k=20&c=PR11NK1N6qS4IP2c1jTwkhM_B5EidvEugaInMvGDwZ0=",
    "https://i.pinimg.com/736x/87/86/f6/8786f6e647e5e1c4f2518f87eea4f4c2.jpg",
  ];

  // Função para avançar o slide no carrossel do Maracanã
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % maracanaImages.length);
  };

  // Função para retroceder o slide no carrossel do Maracanã
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + maracanaImages.length) % maracanaImages.length
    );
  };

  // Função para avançar o slide no carrossel da Catedral
  const nextSlideCathedral = () => {
    setCurrentSlideCathedral(
      (prevSlide) => (prevSlide + 1) % cathedralImages.length
    );
  };

  // Função para retroceder o slide no carrossel da Catedral
  const prevSlideCathedral = () => {
    setCurrentSlideCathedral(
      (prevSlide) =>
        (prevSlide - 1 + cathedralImages.length) % cathedralImages.length
    );
  };

  // Função para alternar entre modo escuro e claro
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Cabeçalho */}
      <header>
        <h1>Rio de Janeiro: City Guide</h1>

        {/* ToggleSwitch para ativar o Dark Mode */}
        <ToggleSwitch isOn={darkMode} handleToggle={toggleDarkMode} />

        {/* Menu de navegação */}
        <nav>
          <ul>
            <li>
              <a href="#zona-norte">Zona Norte</a>
            </li>
            <li>
              <a href="#zona-central">Zona Central</a>
            </li>
            <li>
              <a href="#zona-oeste">Zona Oeste</a>
            </li>
          </ul>
        </nav>

        {/* Menu hamburguer para dispositivos móveis */}
        <div className="hamburger-menu">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="dropdown-menu">
            <li>
              <a href="#zona-norte">Zona Norte</a>
            </li>
            <li>
              <a href="#zona-central">Zona Central</a>
            </li>
            <li>
              <a href="#zona-oeste">Zona Oeste</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main>
        {/* Seção da Zona Norte */}
        <section id="zona-norte">
          <h2>Zona Norte</h2>
          <p>
            A Zona Norte é uma das regiões mais populosas do Rio de Janeiro, com
            estádios icônicos, o principal aeroporto, e bairros culturais.
            Conhecida por sua diversidade, abriga importantes bairros como
            Tijuca, Méier, e Vila Isabel.
          </p>

          {/* Carrossel de imagens para o Maracanã */}
          <div className="grid-layout">
            <div className="carousel">
              <img
                src={maracanaImages[currentSlide]}
                alt={`Maracanã ${currentSlide + 1}`}
                className="carousel-item active"
              />
              <p>O Maracanã é o maior e mais famoso estádio do Brasil.</p>
              <button className="prev" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>

            {/* Estádio Engenhão */}
            <div className="engenhao">
              <h3>Estádio Nilton Santos (Engenhão)</h3>
              <img
                src="https://www.atribunarj.com.br/wp-content/uploads/2017/03/Engenh_C3_A3o_VPS_Music1_1__172081669.jpg"
                alt="Estádio Engenhão"
              />
              <p>
                O Engenhão é um estádio multiuso, utilizado principalmente para
                futebol e eventos esportivos.
              </p>
            </div>

            {/* Aeroporto Galeão */}
            <div className="galeao">
              <h3>Aeroporto Internacional Galeão</h3>
              <img
                src="https://mestredasmilhas.com/wp-content/uploads/2019/07/RioGale%C3%A3o.jpg"
                alt="Aeroporto Galeão"
              />
              <p>
                O Aeroporto Internacional Galeão é um dos principais hubs de
                aviação do Brasil.
              </p>
            </div>

            {/* Floresta da Tijuca */}
            <div className="floresta-tijuca">
              <h3>Floresta da Tijuca</h3>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/j6IeGmisY9U"
                title="Floresta da Tijuca"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                A Floresta da Tijuca é uma das maiores florestas urbanas do
                mundo, um verdadeiro tesouro natural.
              </p>
            </div>
          </div>
        </section>

        {/* Seção da Zona Central */}
        <section id="zona-central">
          <h2>Zona Central</h2>
          <p>
            A Zona Central é um dos locais mais históricos do Rio de Janeiro,
            com pontos turísticos como a Catedral de São Sebastião e o Museu do
            Amanhã.
          </p>

          {/* Carrossel de imagens para a Catedral de São Sebastião */}
          <div className="grid-layout">
            <div className="carousel">
              <img
                src={cathedralImages[currentSlideCathedral]}
                alt={`Catedral ${currentSlideCathedral + 1}`}
                className="carousel-item active"
              />
              <p>A Catedral de São Sebastião é um dos maiores marcos do Rio.</p>
              <button className="prev" onClick={prevSlideCathedral}>
                &#10094;
              </button>
              <button className="next" onClick={nextSlideCathedral}>
                &#10095;
              </button>
            </div>

            {/* Museu do Amanhã */}
            <div className="museu-amanha">
              <h3>Museu do Amanhã</h3>
              <img
                src="https://www.dlegend.com.br/blog/wp-content/uploads/2016/06/inauguracao_museu_do_amanha_2.jpg"
                alt="Museu do Amanhã"
              />
              <p>
                O Museu do Amanhã é um museu de ciência localizado na Zona
                Central do Rio.
              </p>
            </div>

            {/* Theatro Municipal */}
            <div className="theatro-municipal">
              <h3>Theatro Municipal do Rio de Janeiro</h3>
              <img
                src="https://riotur.rio/wp-content/uploads/2015/09/Theatro-Municipal-scaled.jpg"
                alt="Theatro Municipal"
              />
              <p>
                O Theatro Municipal é um dos mais importantes teatros do Brasil.
              </p>
            </div>

            {/* Escadaria Selarón */}
            <div className="escadaria-selaron">
              <h3>Escadaria Selarón</h3>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/bPho3XTXTTk"
                title="Escadaria Selarón"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                A Escadaria Selarón é um dos marcos culturais mais visitados do
                Rio de Janeiro.
              </p>
            </div>
          </div>
        </section>

        {/* Seção da Zona Oeste */}
        <section id="zona-oeste">
          <h2>Zona Oeste</h2>
          <p>
            A Zona Oeste do Rio é famosa por seus eventos esportivos e suas
            praias paradisíacas.
          </p>

          <div className="grid-layout">
            {/* Sede da CBF */}
            <div className="cbf">
              <h3>Sede da CBF</h3>
              <img
                src="https://placar.com.br/wp-content/uploads/2024/09/50174248606_c6d0ebd60e_o.jpg"
                alt="Sede da CBF"
              />
              <p>A sede da Confederação Brasileira de Futebol (CBF).</p>
            </div>

            {/* Parque Olímpico */}
            <div className="parque-olimpico">
              <h3>Parque Olímpico</h3>
              <img
                src="https://www.conjur.com.br/img/b/parque-olimpico-rio-janeiro.jpeg"
                alt="Parque Olímpico"
              />
              <p>
                O Parque Olímpico foi palco dos Jogos Olímpicos de 2016 no Rio
                de Janeiro.
              </p>
            </div>

            {/* Praia da Barra */}
            <div className="praia-barra">
              <h3>Praia da Barra</h3>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/mlNDHgHOM8k"
                title="Praia da Barra"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                A Praia da Barra é uma das praias mais famosas e extensas do Rio
                de Janeiro.
              </p>
            </div>

            {/* Praia de Grumari */}
            <div className="praia-grumari">
              <h3>Praia de Grumari</h3>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/RXKDm56H3As"
                title="Praia de Grumari"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                A Praia de Grumari é uma das praias preservadas e menos
                frequentadas do Rio.
              </p>
            </div>

            {/* Prainha */}
            <div className="praia-prainha">
              <h3>Prainha</h3>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/a-AI5QEgX50"
                title="Prainha"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                A Prainha é muito procurada por surfistas devido às suas boas
                ondas.
              </p>
            </div>

            {/* Praia da Macumba */}
            <div className="praia-macumba">
              <h3>Praia da Macumba</h3>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/HH7XwPa1TC8"
                title="Praia da Macumba"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                A Praia da Macumba é conhecida por suas boas condições para o
                surf.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        {/* Barra de progresso mostrando o progresso atual */}
        <ProgressBar progress={70} />

        {/* Logo do site inserido logo abaixo da barra de progresso */}
        <img
          src="https://dynamic.brandcrowd.com/asset/logo/4ba1f9c9-4a8c-4c50-9b16-ca06458b4d59/logo-search-grid-2x?logoTemplateVersion=1&v=637489506245300000"
          alt="Rio Tour Logo"
          className="rio-logo"
        />
      </footer>
    </div>
  );
}

export default App;

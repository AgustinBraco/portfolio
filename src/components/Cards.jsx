const data = [
  {
    id: 1,
    type: 'Trabajo',
    rol: 'Frontend',
    title: 'CC Manuel Suarez',
    deploy: 'https://ccmanuelsuarez.com.ar/',
    repository: 'https://github.com/AgustinBraco/manuel_suarez',
    image: '/assets/manuelsuarez.png',
  },
  {
    id: 2,
    type: 'Proyecto',
    rol: 'Frontend',
    title: 'Lucas Fridman',
    deploy: 'https://agustinbraco.github.io/lucas_fridman/',
    repository: 'https://github.com/AgustinBraco/lucas_fridman',
    image: '/assets/lucasfridman.png',
  },
  {
    id: 3,
    type: 'Herramienta',
    rol: 'Backend',
    title: 'API: Correos',
    deploy: 'https://github.com/AgustinBraco/email_api',
    repository: 'https://github.com/AgustinBraco/email_api',
    image: '/assets/email.png',
  },
  {
    id: 4,
    type: 'Herramienta',
    rol: 'Backend',
    title: 'BOT: Mensajería',
    deploy: 'https://github.com/AgustinBraco/message_bot',
    repository: 'https://github.com/AgustinBraco/message_bot',
    image: '/assets/bot.png',
  },
  {
    id: 5,
    type: 'Experimento',
    rol: 'Frontend',
    title: 'Presupuestador',
    deploy: 'https://experiments-dev.vercel.app/presupuesto',
    repository: 'https://github.com/AgustinBraco/experiments',
    image: '/assets/budget.png',
  },
  {
    id: 6,
    type: 'Experimento',
    rol: 'Frontend',
    title: 'Parallax',
    deploy: 'https://experiments-dev.vercel.app/parallax',
    repository: 'https://github.com/AgustinBraco/experiments',
    image: '/assets/parallax.png',
  },
];

export const Cards = () => (
  <div id="Cards">
    {data.map(card => (
      <div key={card.id} className="Card">
        <div
          className="CardImage"
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>

        <p className="CardTitle">{card.title}</p>

        <p className="CardText">
          {card.type} | {card.rol}
        </p>

        <div className="CardLinks">
          <a className="CardLink" href={card.repository} target="_blank">
            <img
              className="CardLogo"
              src={`/assets/card_github.png`}
              alt="github_logo"
            />
          </a>

          <a className="CardLink" href={card.deploy} target="_blank">
            <img
              className="CardLogo"
              src={`/assets/card_link.png`}
              alt="link_logo"
            />
          </a>
        </div>
      </div>
    ))}
  </div>
);

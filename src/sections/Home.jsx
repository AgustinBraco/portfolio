import { Picture } from '../components';

export const Home = () => (
  <section id="Home">
    <div>
      <h2 className="HomeTitle">Full Stack</h2>
      <h1 className="HomeTitle">Developer</h1>

      <p className="HomeSubtitle">
        Desarrollo productos sólidos y escalables, enfocados en calidad,
        accesibilidad y usabilidad.
      </p>
    </div>

    <div style={{ display: 'flex' }}>
      <div>
        <p className="HomeText">
          <b>Frontend</b>
        </p>
        <p className="HomeText">
          Interfaces progresivas y fluidas. Diseñadas en pos de la experiencia
          del usuario.
        </p>
      </div>

      <div>
        <p className="HomeText">
          <b>Backend</b>
        </p>
        <p className="HomeText">
          Aplicaciones eficientes y optimizadas. Diseñadas en pos de la calidad
          del producto.
        </p>
      </div>
    </div>

    <Picture />
  </section>
);

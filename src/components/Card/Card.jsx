import styles from './card.module.scss';

const Card = () => {
    const textStyle = {
        boxShadow: '2px 2px 4px #000000',
    }
    return(
        <div className={styles.card}>
            <h2>Hola soy una Card</h2>
            <p>Este es el contenido de la Card</p>
            <p style={{ textStroke: '1px darkblue', WebkitTextStroke: '1px darkblue' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem assumenda odio enim, quasi dicta adipisci iste laudantium dolorem nobis a mollitia, dolorum exercitationem quas laborum consectetur optio eligendi id saepe!</p>
            <figure style={textStyle}>
                <img src="/assets/css.png" alt="soy el logo de css3" />
            </figure>
        </div>
    );
};

export default Card;
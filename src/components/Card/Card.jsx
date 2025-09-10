import styles from './card.module.scss';

const Card = () => {
    return(
        <div className={styles.card}>
            <h2>Hola soy una Card</h2>
            <p>Este es el contenido de la Card</p>
        </div>
    );
};

export default Card;
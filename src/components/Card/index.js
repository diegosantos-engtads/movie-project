import styles from "./Card.module.css";

function Card({ id }) {
    return (
        <section className={styles.card}>
            <a href={`https://www.youtube.com/watch?v=${id}"`} rel="noreferrer noopener" target="_blank">
            <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="Capa" />
            </a>
        </section>
    );
}
export default Card;
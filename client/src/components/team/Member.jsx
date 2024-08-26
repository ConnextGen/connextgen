import styles from './Member.module.css';

const Member = ({ name, title, image }) => {
    return (
        <div className={styles.member}>
            <h3>{name}</h3>
            {title && <p>{title}</p>}
            <img src={image} alt={name}></img>
        </div>
    );
}

export default Member;
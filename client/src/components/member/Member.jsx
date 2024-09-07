import styles from './Member.module.css';

const Member = ({ name, title, image }) => {
    return (
        <div className={styles.member}>
            <h3>{name}</h3>
            {title && <p>{title}</p>}
            <div className={styles.avatarContainer}>
                <img src={image} alt={name}></img>
            </div>
        </div>
    );
}

export default Member;
import { CircularProgress } from '@mui/material';
import styles from './Unit.module.css';

const Unit = ({ unitNumber, unitName, percentage }) => {
    return (
        <div className={styles.unit}>
            <h1><span className={styles.unitNumber}>Unit {unitNumber}:</span> {unitName}</h1>
            <div className={styles.progress}>
                <p>{percentage}<span className={styles.percentage}>%</span></p>
                <CircularProgress
                    variant='determinate'
                    value={percentage} 
                    thickness={8}
                    size={'8vh'}
                    style={{ color: '#2c9a93' }}
                />
            </div>
        </div>
    );
}

export default Unit;
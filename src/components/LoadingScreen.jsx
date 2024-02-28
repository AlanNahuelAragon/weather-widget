import styles from './styles/loadingScreen.module.css'
export default function LoadingScreen(){
    return(
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>
                <div>

                </div>
            </div>
        </div>
    )
}
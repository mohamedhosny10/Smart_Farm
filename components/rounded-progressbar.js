import styles from './../styles/Rounded_progress_bar.module.css';
function RoundedProgressBar() {
    var y = 100
    var x = 440 - (440 * y / 100);
    return (<>
        <div class={styles.container} >
            <div class={styles.card}>
                <div class={styles.percent} style={{ '--clr': '#dd0a0a', '--num': 70 }} >
                    <div class="dot"></div>
                    <svg >
                        <circle className={styles.outer_circle} style={{ '--clr': '#0d6efd', '--num': x }}
                            cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class={styles.number} >
                        <h2>100<span>%</span></h2>
                        <p>Clear</p>

                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default RoundedProgressBar
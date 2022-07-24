import { canSSRAuth } from '../../utils/canSSRAuth';
import style from './dashboard.module.scss';

export default function Dashboard() {
    return (
        <div className={style.container}>
            <h1 className={style.h1}>Dashboard</h1>
        </div>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})
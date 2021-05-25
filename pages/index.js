import Head from 'next/head'
import styles from '../styles/Home.module.css'

import TopBar from './TopBar';
import Posts from './Posts';

export default function Home() {
    return (
        <div>
            <TopBar/>
            <Posts/>
        </div>

    )
}
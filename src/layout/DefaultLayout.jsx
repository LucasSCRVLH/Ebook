import { Outlet } from 'react-router-dom'
import './layout.css'
import { Aside } from '../components/Aside'
import { Header } from '../components/Header'


export function DefaultLayout() {


    <div id="page">

        <Header />
        <Aside />
        <main>
            <Outlet />
        </main>


    </div>


}
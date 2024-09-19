import { Outlet } from 'react-router-dom'
import './layout.css'


export function DefaultLayout() {


    <div id="page">

        <Header />
        <Aside />
        <main>
            <Outlet />
        </main>


    </div>


}
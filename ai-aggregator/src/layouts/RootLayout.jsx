import { Outlet } from 'react-router'

function RootLayout (){
    return(
        <div className="root-layout">
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout
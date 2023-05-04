import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AddNewPage} from "./pages";
import {Lists} from "./components";

function App() {

    return (

        <Routes>

            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'new'}/>}/>
                <Route path={'new'} element={<AddNewPage/>}/>

                <Route path={'lists'} element={<Lists/>}/>
            </Route>

        </Routes>

    );
}

export default App;

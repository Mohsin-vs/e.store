import { Route, Routes } from 'react-router-dom';

import Index from '../pages';
import { DetailPage } from "../components/index"

const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} ></Route>
            <Route path="/ProductDetail/:pid" element={<DetailPage />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}
export default AllRoute
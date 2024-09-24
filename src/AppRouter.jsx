import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./tarefas/home/Home"

import T1 from "./tarefas/T1/T1"
import T10 from "./tarefas/T10/T10"
import T11 from "./tarefas/T11/T11"
import T12 from "./tarefas/T12/T12"
import T13 from "./tarefas/T13/T13"
import T14 from "./tarefas/T14/T14"
import T15 from "./tarefas/T15/T15"
import T16 from "./tarefas/T16/T16"
import T2 from "./tarefas/T2/T2"
import T3 from "./tarefas/T3/T3"
import T4 from "./tarefas/T4/T4"
import T5 from "./tarefas/T5/T5"
import T6 from "./tarefas/T6/T6"
import T7 from "./tarefas/T7/T7"
import T8 from "./tarefas/T8/T8"
import T9 from "./tarefas/T9/T9"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/1" element={<T1 />} />
                <Route path="/2" element={<T2 />} />
                <Route path="/3" element={<T3 />} />
                <Route path="/4" element={<T4 />} />
                <Route path="/5" element={<T5 />} />
                <Route path="/6" element={<T6 />} />
                <Route path="/7" element={<T7 />} />
                <Route path="/8" element={<T8 />} />
                <Route path="/9" element={<T9 />} />
                <Route path="/10" element={<T10 />} />
                <Route path="/11" element={<T11 />} />
                <Route path="/12" element={<T12 />} />
                <Route path="/13" element={<T13 />} />
                <Route path="/14" element={<T14 />} />
                <Route path="/15" element={<T15 />} />
                <Route path="/16" element={<T16 />} />
            </Routes>
        </BrowserRouter>
    )
}
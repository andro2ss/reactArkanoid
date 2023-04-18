import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './Layout/MainLayout/MainLayout'
import { HomePage } from './pages/HomePage'
import { Page404 } from './pages/Page404'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout headerContent={<div>header</div>} footerContent={<div>footer</div>} />}>
          <Route path={'/'} element={<HomePage />} />
        </Route>
        <Route path={'*'} element={<Page404 />} />{' '}
      </Routes>
    </BrowserRouter>
  )
}

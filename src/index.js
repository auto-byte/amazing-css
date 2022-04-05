import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.min.css';
import AppLayout from './App';

createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
import {createRoot} from 'react-dom/client';

import Form from './components/Form/Form';

const App = () => {
    return (
        <>
        <div className="container">
            <Form/>
        </div>
        </>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
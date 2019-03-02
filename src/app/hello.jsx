import {h} from 'preact';
import render from 'preact-render-to-json';
import {Jason, Head} from '../jason';

const Root = () => (
    <Jason>
        <Head title="My App" description="Hello" icon="file://icon.png"/>
    </Jason>
);

const output = render(<Root/>);
export default output;
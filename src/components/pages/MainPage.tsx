import Container from '../elements/Container';
import Form from '../elements/Forms';
import { useSelector } from 'react-redux';
import { State } from '../../state/state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../state/action-creators'

function MainPage() {

    const dispath = useDispatch();
    const { formSubmit } = bindActionCreators(ActionCreators, dispath);

    const state = useSelector((state: State) => state.form);

    return (
        <main>
            <h1 className="display-4 text-center">It's a MainPage</h1>
            <Form formSubmit={ formSubmit }/>
            {
                state.length > 0 ? <Container url={state}/> : null
            }
        </main>
    );
}

export default MainPage;
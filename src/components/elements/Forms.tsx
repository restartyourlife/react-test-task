import React, { useState } from 'react';
import { FormEvent } from 'react';

function Form({formSubmit}:{formSubmit: Function}) {

    const [disable, isValid] = useState(false);

    const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'ig');


    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value = (event.currentTarget.elements[0] as HTMLInputElement).value;
        formSubmit(value);
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        (event.target.value.match(regex) && event.target.value.length > 0) ? isValid(false) : isValid(true);
    }

    return (
        <form onSubmit={(event) => { onSubmitHandler(event) }}>
            <div className="row d-flex flex-column">
                <div className="col">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="url"
                            placeholder="Enter URL" 
                            onChange={(event) => { onChangeHandler(event) }}
                        />
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-center pt-2 text-center">
                    <button type="submit" className="btn btn-lg btn-primary" disabled={disable}>Submit</button>
                </div>
                <div className="col pt-3 text-center">
                    {disable ? <small className="text-danger">Url invalid.</small> : null}
                </div>
            </div>
        </form>
    );
}

export default Form;

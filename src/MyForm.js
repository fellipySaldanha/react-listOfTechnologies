import React, {Component} from 'react';

class MyForm extends Component{
    render(){
        return(
            <form>
                <label>
                    Name: <input type='text' name='name'/>
                </label>
                <input type='submit' value='Enviar'/>
            </form>
        );
    }
}

export default MyForm;
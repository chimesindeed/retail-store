import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TapesPriceContext} from '../../../../z-context-containers/contextObjects'


export const TapesInputComponent = () => {
    const [tapesPrice, setTapesPrice] = useContext(TapesPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={tapesPrice} />
            </FormGroup>
        </Form>
    )
}
import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { SetsPriceContext} from '../../../../z-context-containers/contextObjects'


export const SetsInputComponent = () => {
    const [setsPrice, setSetsPrice] = useContext(SetsPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={setsPrice} />
            </FormGroup>
        </Form>
    )
}
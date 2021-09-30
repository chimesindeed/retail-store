import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DvdsPriceContext} from '../../../../z-context-containers/contextObjects'


export const DvdsInputComponent = () => {
    const [dvdsPrice, setDvdsPrice] = useContext(DvdsPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={dvdsPrice} />
            </FormGroup>
        </Form>
    )
}
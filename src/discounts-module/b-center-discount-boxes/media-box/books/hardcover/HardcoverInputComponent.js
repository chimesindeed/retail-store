import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { HardcoverPriceContext} from '../../../../z-context-containers/contextObjects'


export const HardcoverInputComponent = () => {
    const [hardcoverPrice, setHardcoverPrice] = useContext(HardcoverPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="currency"
                       name="priceInput"
                       id="priceInput"
                       placeholder={hardcoverPrice} />
            </FormGroup>
        </Form>
    )
}
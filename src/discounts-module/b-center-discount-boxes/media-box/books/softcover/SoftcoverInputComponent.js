import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { SoftcoverPriceContext} from '../../../../z-context-containers/contextObjects'


export const SoftcoverInputComponent = () => {
    const [softcoverPrice, setSoftcoverPrice] = useContext(SoftcoverPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={softcoverPrice} />
            </FormGroup>
        </Form>
    )
}
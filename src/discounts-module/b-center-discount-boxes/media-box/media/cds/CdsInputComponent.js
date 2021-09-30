import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { CdsPriceContext} from '../../../../z-context-containers/contextObjects'


export const CdsInputComponent = () => {
    const [cdsPrice, setCdsPrice] = useContext(CdsPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={cdsPrice} />
            </FormGroup>
        </Form>
    )
}
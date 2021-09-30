import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ChildrensPriceContext} from '../../../../z-context-containers/contextObjects'


export const ChildrensInputComponent = () => {
    const [childrensPrice, setChildrensPrice] = useContext(ChildrensPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="currency"
                       name="priceInput"
                       id="priceInput"
                       placeholder={childrensPrice} />
            </FormGroup>
        </Form>
    )
}
import React, {useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AlbumsPriceContext} from '../../../../z-context-containers/contextObjects'


export const AlbumsInputComponent = () => {
    const [albumsPrice, setAlbumsPrice] = useContext(AlbumsPriceContext)
    return (
        <Form>
            <FormGroup>
                <Label for="priceInput">Email</Label>
                <Input type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={albumsPrice} />
            </FormGroup>
        </Form>
    )
}
// rendered by route-components DiscountsLayout.js

import React from 'react';
import {Card, CardBody} from 'reactstrap';
import '../../../Styles.css'
import * as Tick from './presentational/TicketColorComponents'
import {useDaysPassed} from '../../z-hooks/useDaysPassed'

export const TicketCycleContainer = (props) => {
    const {color} = useDaysPassed();
    const setColorComponent = () => {
        switch(color){
            case 'Yellow': return <Tick.Yellow/>
            case 'Green': return <Tick.Green/>
            case 'Blue': return <Tick.Blue/>
            case 'White': return <Tick.White/>
            case 'Pink': return <Tick.Pink/>
            default: return "Loading..."
        }
    }
  return (
      <Card className="ticket-box-card">
        <div className="ticket-box-title">{Tick.discountedItems}</div>
        <CardBody>
            {
                setColorComponent()
            }
        </CardBody>
      </Card>
  );
};
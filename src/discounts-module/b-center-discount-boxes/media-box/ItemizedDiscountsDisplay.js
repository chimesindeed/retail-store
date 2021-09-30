import React from 'react';
import {Card, CardBody} from 'reactstrap';
import '../../../Styles.css'
import SoftcoverCardFrontAndBack from './books/softcover/SoftcoverCardFrontAndBack'
import HardcoverCardFrontAndBack from './books/hardcover/HardcoverCardFrontAndBack'
import ChildrensCardFrontAndBack from './books/childrens/ChildrensCardFrontAndBack'
import TapesCardFrontAndBack from './media/tapes/TapesCardFrontAndBack'
import AlbumsCardFrontAndBack from './media/albums/AlbumsCardFrontAndBack'
import CdsCardFrontAndBack from './media/cds/CdsCardFrontAndBack'
import DvdsCardFrontAndBack from './media/dvds/DvdsCardFrontAndBack'
import SetsCardFrontAndBack from './media/sets/SetsCardFrontAndBack'

const media = "MEDIA"
const books = "Books"
const av = "Audio & Video"

export const ItemizedDiscountsDisplay = (props) => {
  return (
    <Card className="itemized-discounts-box-card">
      <div className="itemized-discounts-box-title">{media}</div>
        <CardBody>
            <div className="books-and-media-container">
                <div className="books-container">
                  <div className="books-title">{books}</div>
                    <SoftcoverCardFrontAndBack/>
                    <HardcoverCardFrontAndBack/>
                    <ChildrensCardFrontAndBack/>
                  </div>
           
                <div className="media-container">
                  <div className="media-title">{av}</div>
                    <TapesCardFrontAndBack/>
                    <AlbumsCardFrontAndBack/>
                    <CdsCardFrontAndBack/>
                    <DvdsCardFrontAndBack/>
                    <SetsCardFrontAndBack/>
                    
                </div>
            </div>
      </CardBody>
    </Card>
  );
};

import React from 'react'
import { AppType } from '../../AppType';
import { v4 as uuidv4 } from 'uuid';

type cardlistType = {
    cardlist: AppType[]
}
const Nftcard = ({ cardlist }: cardlistType) => {

    return (
        <>
            {
                cardlist.length > 0 ? (cardlist && cardlist.map((card, i) => (
                    <div className="nft-card" key={uuidv4()}>
                        <div className="nft-image-container">
                            <img src={card.imageurl}
                                className='nft-image'
                                alt={card.productname} loading="lazy" />
                        </div>
                        <div className="nft-description">
                            <h3 className='description-title'>{card.productname}</h3>
                            <div className="userlists">
                                {
                                    card.userslist.map(users => (
                                        <div className="userlist-card" key={uuidv4()}>
                                            <span className='userlist-title'>{users.username}</span>
                                            <span className='userlist-tag'>{users.tagname}</span>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                ))) : (
                    <div className='loading'>
                        <h1>Loading....</h1>
                    </div>
                )
            }
        </>
    )
}

export { Nftcard }
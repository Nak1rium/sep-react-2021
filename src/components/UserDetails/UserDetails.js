import React, {useState} from 'react';

import './UserDetails.css';
import Btn from "../Btn/Btn";

const UserDetails = ({user, getPostsByUserId}) => {

    return (
        <div className={'main_UserDetails'}>
            <div className={'margin_top_10px'}>User Details</div>
            <div className={'margin_top_15px'}><span>Id:</span> {user?.id}</div>
            <div><span>Name:</span> {user?.name}</div>
            <div><span>Username:</span> {user?.username}</div>
            <div><span>Email:</span> {user?.email}</div>
            <div className={'margin_top_5px'}><span>Address:</span></div>
            <div>street: {user?.address.street}</div>
            <div>suite: {user?.address.suite}</div>
            <div>city: {user?.address.city}</div>
            <div>zipcode: {user?.address.zipcode}</div>
            <div className={'margin_top_5px'}><span>Geo:</span></div>
            <div>lat: {user?.address.geo.lat}</div>
            <div>Lng: {user?.address.geo.lng}</div>
            <div className={'margin_top_5px'}><span>Phone:</span> {user?.phone}</div>
            <div><span>Website:</span> {user?.website}</div>
            <div className={'margin_top_5px'}><span>Company:</span></div>
            <div>name: {user?.company.name}</div>
            <div>catchPhrase: {user?.company.catchPhrase}</div>
            <div>bs: {user?.company.bs}</div>
            <div className={'btn'}><Btn onClick={getPostsByUserId} id={user.id} title={'Get posts'}/></div>
        </div>
    );
};

export default UserDetails;
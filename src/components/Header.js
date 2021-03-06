import React, { Component } from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  let username
  let imageUrl;
  if (props.user) {
    username = props.user.display_name;
    imageUrl = props.user.images[0].url
  }
  return (
    <div className="container__top-header">
      <div className="container__main-view--topHeader">
        <input placeholder="Search" />
        <div className="topHeader-left-side">
          <img className="profile-img" src={imageUrl} alt="" />
          <p className="profile-username">{username}</p>
        </div>
      </div>
      <h1 className="main-view-title">{props.title}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.mainViewReducer.title,
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(Header);
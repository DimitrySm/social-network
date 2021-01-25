"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Users_module_css_1 = require("./Users.module.css");
var user_male_png_1 = require("../../assets/imgs/user_male.png");
var react_router_dom_1 = require("react-router-dom");
var api_1 = require("../../api/api");
var Users = function (props) {
    var pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    var pages = [];
    for (var i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null, pages.map(function (p) {
            return (react_1["default"].createElement("span", { onClick: function (e) {
                    props.onPageChanged(p);
                }, className: props.curentPage === p ? Users_module_css_1["default"].selected : "" }, p));
        })),
        props.users.map(function (u) { return (react_1["default"].createElement("div", { key: u.id },
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/profile/" + u.id },
                        react_1["default"].createElement("img", { src: u.photos.small != null ? u.photos.small : user_male_png_1["default"], alt: "", className: Users_module_css_1["default"].userPhoto }))),
                react_1["default"].createElement("div", null, u.followed ? (react_1["default"].createElement("button", { disabled: props.toggleIsfollowingInProgress, onClick: function () {
                        props.toggleIsfollowingInProgress(true);
                        api_1.userAPI.followUser(u.id).then(function (data) {
                            if (data.resultCode === 0) {
                                props.unfollow(u.id);
                            }
                            props.toggleIsfollowingInProgress(false);
                        });
                    } }, "Unfollow")) : (react_1["default"].createElement("button", { disabled: props.toggleIsfollowingInProgress, onClick: function () {
                        props.toggleIsfollowingInProgress(true);
                        api_1.userAPI.unfollowUser(u.id).then(function (data) {
                            if (data.resultCode === 0) {
                                props.follow(u.id);
                            }
                            props.toggleIsfollowingInProgress(false);
                        });
                    } }, "Follow")))),
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("div", null, u.name),
                    react_1["default"].createElement("div", null, u.status)),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("div", null, "u.location.country"),
                    react_1["default"].createElement("div", null, "u.location.city"))))); })));
};
exports["default"] = Users;

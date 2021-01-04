"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.setUsersAC = exports.unfollowAC = exports.followAC = void 0;
var FOLLOW = "FOLLOW";
var UNFOLLOW = "UNFOLLOW";
var SET_USERS = "SET_USERS";
var initialState = {
    users: []
};
var UsersReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case FOLLOW:
            return __assign(__assign({}, state), { users: state.users.map(function (u) {
                    if (u.id === action.userId) {
                        return __assign(__assign({}, u), { followed: true });
                    }
                    return u;
                }) });
        case UNFOLLOW:
            return __assign(__assign({}, state), { users: state.users.map(function (u) {
                    if (u.id === action.userId) {
                        return __assign(__assign({}, u), { followed: false });
                    }
                    return u;
                }) });
        case SET_USERS: {
            return __assign(__assign({}, state), { users: __spreadArrays(state.users, action.users) });
        }
        default:
            return state;
    }
};
exports.followAC = function (userId) {
    return ({
        type: FOLLOW,
        userId: userId
    });
};
exports.unfollowAC = function (userId) {
    return ({
        type: UNFOLLOW,
        userId: userId
    });
};
exports.setUsersAC = function (users) {
    return ({
        type: SET_USERS,
        users: users
    });
};
exports["default"] = UsersReducer;

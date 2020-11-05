import axios from "axios"
import {
    TRANSACTION_DEPOSIT_REQUEST,
    TRANSACTION_DEPOSIT_SUCCESS,
    TRANSACTION_DEPOSIT_FAIL,
    TRANSACTION_WITHDRAW_REQUEST,
    TRANSACTION_WITHDRAW_SUCCESS,
    TRANSACTION_WITHDRAW_FAIL,
    TRANSACTION_TRANFER_REQUEST,
    TRANSACTION_TRANFER_SUCCESS,
    TRANSACTION_TRANFER_FAIL,
    TRANSACTION_SALDO_REQUEST,
    TRANSACTION_SALDO_SUCCESS,
    TRANSACTION_SALDO_FAIL
} from "../constants/transactionConstants"
import { logout } from './userActions'


export const deposit = (accountDeposit, AmountDeposit, decsDeposit) => async(dispatch, getState) => {
    try {
        dispatch({
            type: TRANSACTION_DEPOSIT_REQUEST,
        })
        const {
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: '${token}',
            },
        };

        const { data: { data } } = await axios.post("/api/v1/deposit", {
            transaction_type: 1,
            transaction_description: decsDeposit,
            sender: parseInt(accountDeposit),
            recipient: parseInt(accountDeposit),
            timestamp: Date.now,
            Amount: parseInt(AmountDeposit)
        }, config)
        dispatch({
            type: TRANSACTION_DEPOSIT_SUCCESS,
            payload: data,
        })
        dispatch(saldo())
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TRANSACTION_DEPOSIT_FAIL,
            payload: message
        })
    }
}


export const withdraw = (accountWithdraw, AmountWithdraw, decsWithdraw) => async(dispatch, getState) => {
    try {
        dispatch({
            type: TRANSACTION_WITHDRAW_REQUEST,
        })
        const {
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: '${token}',
            },
        };

        const { data: { data } } = await axios.post("/api/v1/Withdraw", {
            transaction_type: 1,
            transaction_description: decsWithdraw,
            sender: parseInt(accountWithdraw),
            recipient: parseInt(accountWithdraw),
            timestamp: Date.now,
            Amount: parseInt(AmountWithdraw)
        }, config)
        dispatch({
            type: TRANSACTION_WITHDRAW_SUCCESS,
            payload: data,
        })
        dispatch(saldo())
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TRANSACTION_WITHDRAW_FAIL,
            payload: message
        })
    }
}


export const transfer = (accountTransfer, accountTransferSender, AmountTransfer, decsTransfer) => async(dispatch, getState) => {
    try {
        dispatch({
            type: TRANSACTION_TRANSFER_REQUEST,
        })
        const {
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: '${token}',
            },
        };

        const { data: { data } } = await axios.post("/api/v1/Transfer", {
            transaction_type: 0,
            transaction_description: decsTransfer,
            sender: parseInt(accountTransferSender),
            recipient: parseInt(accountTransfer),
            timestamp: Date.now,
            Amount: parseInt(AmountTransfer)
        }, config)
        dispatch({
            type: TRANSACTION_TRANFER_SUCCESS,
            payload: data,
        })
        dispatch(saldo())
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TRANSACTION_TRANFER_SUCCESS,
            payload: message
        })
    }
}


export const saldo = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: TRANSACTION_SALDO_REQUEST,
        })
        const {
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
        };

        const { data: { data } } = await axios.post("/api/v1/account", config)
        dispatch({
            type: TRANSACTION_SALDO_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TRANSACTION_SALDO_FAIL,
            payload: message
        })
    }
}
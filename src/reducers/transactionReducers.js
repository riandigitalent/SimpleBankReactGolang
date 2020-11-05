import {
    TRANSACRION_DEPOSIT_REQUEST,
    TRANSACRION_DEPOSIT_SUCCESS,
    TRANSACRION_DEPOSIT_FAIL,
    TRANSACRION_DEPOSIT_RESET,

    TRANSACRION_WITHDRAW_REQUEST,
    TRANSACRION_WITHDRAW_SUCCESS,
    TRANSACRION_WITHDRAW_FAIL,
    TRANSACRION_WITHDRAW_RESET,

    TRANSACRION_TRANSFER_REQUEST,
    TRANSACRION_TRANSFER_SUCCESS,
    TRANSACRION_TRANSFER_FAIL,
    TRANSACRION_TRANSFER_RESET,

    TRANSACRION_SALDO_REQUEST,
    TRANSACRION_SALDO_SUCCESS,
    TRANSACRION_SALDO_FAIL,
    TRANSACRION_SALDO_RESET

} from "../constants/transactionConstants"

export const transactionDepositReducer = (state = {}, action) => {
    switch (action.type) {
        case TRANSACRION_DEPOSIT_REQUEST:
            return { loading: true };
        case TRANSACRION_DEPOSIT_SUCCESS:
            return { loading: false, success: true, transactions: action.payload };
        case TRANSACRION_DEPOSIT_FAIL:
            return { loading: false, error: action.payload };
        case TRANSACRION_DEPOSIT_RESET:
            return {};
        default:
            return state;
    }
}

export const transactionWithdrawReducer = (state = {}, action) => {
    switch (action.type) {
        case TRANSACRION_WITHDRAW_REQUEST:
            return { loading: true };
        case TRANSACRION_WITHDRAW_SUCCESS:
            return { loading: false, success: true, transactions: action.payload };
        case TRANSACRION_WITHDRAW_FAIL:
            return { loading: false, error: action.payload };
        case TRANSACRION_WITHDRAW_RESET:
            return {};
        default:
            return state;
    }
}

export const transactionTransferReducer = (state = {}, action) => {
    switch (action.type) {
        case TRANSACRION_TRANSFER_REQUEST:
            return { loading: true };
        case TRANSACRION_TRANSFER_SUCCESS:
            return { loading: false, success: true, transactions: action.payload };
        case TRANSACRION_TRANSFER_FAIL:
            return { loading: false, error: action.payload };
        case TRANSACRION_TRANSFER_RESET:
            return {};
        default:
            return state;
    }
}

export const transactionSaldoReducer = (state = {}, action) => {
    switch (action.type) {
        case TRANSACRION_SALDO_REQUEST:
            return { loading: true };
        case TRANSACRION_SALDO_SUCCESS:
            return { loading: false, success: true, transactions: action.payload };
        case TRANSACRION_SALDO_FAIL:
            return { loading: false, error: action.payload };
        case TRANSACRION_SALDO_RESET:
            return {};
        default:
            return state;
    }
}
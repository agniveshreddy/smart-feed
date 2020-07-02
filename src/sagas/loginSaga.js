import { call, put } from 'redux-saga/effects';
import { types } from 'actions';
import { loginService } from 'services/loginService';

export default function* loginSaga(payload) {
    const {userId} = payload;
    const response = yield call(loginService, userId)
    if(response){
        yield put({type:types.LOGIN_SUCCESS, user: response});
        /*const ProductsResponse = yield call(productsService, response.email);
        if(ProductsResponse){
            yield put({type:types.PRODUCTS_SUCCESS, products:ProductsResponse})
        }
        else{
            yield put({type:types.PRODUCTS_ERROR, error: 'products not found'});
        }*/
    }
    else
        yield put({type: types.LOGIN_ERROR, error: 'user not found'});
}
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
    sayHelloAsync,
    sayHelloAsyncRequest,
    sayHelloAsyncSuccess,
    sayHelloAsyncFailure,
} from './hello'

import { helloEndpointRoute } from '../../shared/routes'

const mockStore = configureMockStore([thunkMiddleware])

afterEach(() => {
    fetchMock.restore()
})

test('sayHelloAsync success', () => {
    fetchMock.get(helloEndpointRoute(101), { serverMessage: 'Mock success'})

    const store = mockStore()
    return store.dispatch(sayHelloAsync(101))
        .then(() => {
            expect(store.getActions()).toEqual([
                sayHelloAsyncRequest(),
                sayHelloAsyncSuccess('Mock success'),
            ])
        })
})

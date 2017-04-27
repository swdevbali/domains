// @flow
// eslint-disable-next-line import/prefer-default-expo
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`

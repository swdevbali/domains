// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../../config'


const HomePage = () =>
<div>
    <Helmet
          meta={[
                  { name: 'description', content: 'Hello App is an app to say hello' },
                          { property: 'og:title', content: APP_NAME },
                                ]}
                                    />
                                        <p>Selamat datang di awalan dari CoderDojo ini</p>
                                          </div>

export default HomePage      

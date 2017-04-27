// @flow

import React from 'react'

type Props = {
    message: string,
    name: string,
}

const Message = ({ message, name }: Props) =>
      <div>
      <p>{message}</p>
      <p>by {name}</p>
      </div>

export default Message

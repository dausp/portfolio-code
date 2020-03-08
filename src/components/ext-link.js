import React from "react"
import Octicon, {LinkExternal} from '@primer/octicons-react'

const ExtLink = (props) => (
  <>
    <a href={props.children} target="_blank" rel="noopener noreferrer">{props.title}</a>
    {` `}
    <Octicon icon={LinkExternal} size='small'/>
  </>
)

export default ExtLink
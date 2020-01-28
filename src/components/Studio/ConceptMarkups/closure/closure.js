import React from 'react'
import './closure.css'
export const closure = (
  <React.Fragment>
    <p>
      A closure is a function defined inside another function and has access to
      its lexical scope even when it is executing outside its lexical scope. The
      closure has access to variables in three scopes:
    </p>
    <p>
      In JavaScript, all functions are closures because they have access to the
      outer scope, but most functions don't utilise the usefulness of closures:
      the persistence of state. Closures are also sometimes called stateful
      functions because of this.
    </p>
  </React.Fragment>
)

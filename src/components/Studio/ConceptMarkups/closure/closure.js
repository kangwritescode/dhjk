import React from 'react'
import Gist from 'super-react-gist'
import './closure.css'

export const closure = (
  <React.Fragment>
    <p>
      A closure is the combination of a function bundled together (enclosed)
      with references to its surrounding state (the lexical environment). In
      other words, a closure gives you access to an outer function’s scope from
      an inner function. In JavaScript, closures are created every time a
      function is created, at function creation time.
    </p>
    <iframe
      title='closure'
      width='100%'
      height='235'
      src='//jsfiddle.net/kangwritescode/xm7vnfr2/5/embedded/js,result/dark/'
      allowfullscreen='allowfullscreen'
      allowpaymentrequest
      frameborder='0'
    ></iframe>
  </React.Fragment>
)

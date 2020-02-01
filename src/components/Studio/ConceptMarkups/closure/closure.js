/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './closure.css'

export const closure = (
  <React.Fragment>
    <p>
      A closure is the combination of a function bundled together (enclosed)
      with references to its surrounding state (the lexical environment). In
      other words, a closure gives you access to an outer function’s scope from
      an inner function. In JavaScript, closures are created every time a
      function is created, at function creation time. Closure gives our
      functions persistent memories and an entirely new toolkit for writing
      professional code.
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
    <p>Here are some practical applications of closures:</p>
    <ul className='closure-list'>
      <li>
        Helper functions: Everyday professional helper functions like 'once' and
        'memoize'
      </li>
      <li>
        Iterators and generators: Which use lexical scoping and closure to
        achieve the most contemporary patterns for handling data in Javascript
      </li>
      <li>
        Module pattern: Preserve state for the life of an application without
        polluting the global namespace
      </li>
      <li>
        Asynchronous Javascript: Callbacks and Promises rely on closure to
        persist state in an asynchronous environment
      </li>
    </ul>
    <p>Sources and Additional Sources:</p>
    <ul className='closure-list list-type-line'>
      <li>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures'
          target='_blank'
        >
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
        </a>
      </li>
      <li>
        <a href='https://frontendmasters.com/' target='_blank'>
          https://frontendmasters.com/
        </a>
      </li>
      <li>
        <a
          href='https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36'
          target='_blank'
        >
          https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
        </a>
      </li>
    </ul>
  </React.Fragment>
)

/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './thisMarkup.css'

export const thisMarkup = (
  <React.Fragment>
    <p className='thisMarkup-paragraph'>
      The <code>this</code> keyword is an object that represents the context of
      an executing function. Regular functions can have their <code>this</code>{' '}
      value changed with the methods <code>call()</code>, <code>apply(),</code>{' '}
      and <code>bind()</code>. Arrow functions implicitly bind this so that it
      refers to the context of its lexical environment, regardless of whether or
      not its context is set explicitly with <code>call()</code>.
    </p>
    <p>Sources and Additional Sources:</p>
    <ul>
      <li>https://30secondsofinterviews.org/</li>
    </ul>
  </React.Fragment>
)

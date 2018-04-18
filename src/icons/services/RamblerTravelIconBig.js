import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerTravelIconBig extends PureComponent {

  static displayName = 'RamblerTravelIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M43.816 33.697l-1.357-.591a2.486 2.486 0 0 0-2.52.317l-1.163.908-19.503 15.235c-1.935-6.52-1.12-11.602 2.45-16.023l1.952-2.417a2.408 2.408 0 0 0-.893-3.714l-2.845-1.295-2.576-1.172a13.512 13.512 0 0 1 10.533-3.761c1.735.141 3.464.656 5.136 1.529l2.533 1.322c1.332.695 2.98.056 3.474-1.349l.94-2.67a12.737 12.737 0 0 1 4.416-6.027c2.218-1.648 4.93-2.52 7.843-2.52 1.248 0 2.492.168 3.683.488l-4.003 8.417-.951 2.002a2.407 2.407 0 0 0 .981 3.122l1.934 1.12c8.316 4.81 10.899 11.568 11.581 16.506l-21.645-9.427zm12.553-11.264L61.5 11.645c.579-1.216.04-2.658-1.19-3.237a19.027 19.027 0 0 0-8.074-1.79c-3.797 0-7.617 1.129-10.802 3.496a17.55 17.55 0 0 0-6.104 8.311c-2.126-1.11-4.48-1.867-7.028-2.076a19.088 19.088 0 0 0-1.538-.063 18.413 18.413 0 0 0-15.376 8.252c-.81 1.232-.302 2.893 1.05 3.508l5.438 2.475c-6.11 7.566-5.208 16.073-2.089 23.935.605 1.525 2.526 2.048 3.827 1.031l20.71-16.177c1.366 3.483 2.659 7.41 2.659 11.192 0 9.981-5.68 15.274-5.912 15.486l.148.161H20.625c-1.358 0-2.459 1.086-2.459 2.425 0 1.34 1.101 2.426 2.46 2.426h40.848c1.358 0 2.459-1.086 2.459-2.426s-1.101-2.425-2.46-2.425H43.228c2.132-3.142 4.674-8.394 4.674-15.647 0-3.721-.96-7.346-2.132-10.652l21.36 9.303c1.614.702 3.415-.447 3.454-2.187.141-6.278-1.876-17.394-14.214-24.533z"/>
      </SvgIcon>
    )
  }
}

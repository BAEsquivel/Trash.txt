import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerLoveIconBig extends PureComponent {
  static displayName = 'RamblerLoveIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M54.649 7.952c-5.394 0-10.866 2.057-14.649 5.633-3.971-3.575-9.492-5.633-14.872-5.633-9.151 0-17.892 5.954-17.892 20.525 0 16.563 24.732 37.235 31.221 42.374.908.719 2.18.721 3.09.004 6.495-5.112 31.217-25.669 31.217-42.378 0-14.57-8.943-20.525-18.115-20.525m0 5c3.943 0 13.115 1.512 13.115 15.525 0 12.296-17.914 29.292-27.754 37.231-9.845-7.986-27.774-25.05-27.774-37.231 0-5.342 1.398-9.554 4.04-12.182 2.78-2.763 6.348-3.343 8.852-3.343 4.193 0 8.502 1.626 11.526 4.349l1.714 1.543a2.5 2.5 0 0 0 3.39-.041l1.677-1.584c2.827-2.672 7.019-4.267 11.214-4.267"/>
      </SvgIcon>
    )
  }
}

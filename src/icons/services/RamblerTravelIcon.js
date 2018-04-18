import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerTravelIcon extends PureComponent {

  static displayName = 'RamblerTravelIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.435 8.416a.749.749 0 0 0-.769.098l-4.929 3.903c-.39-1.488-.179-2.661.634-3.682l.477-.598a.75.75 0 0 0-.273-1.148l-.694-.321-.448-.206a3.164 3.164 0 0 1 2.34-.765c.41.034.818.157 1.213.367l.876.463a.5.5 0 0 0 .706-.277l.326-.937a3.034 3.034 0 0 1 1.041-1.441 3.045 3.045 0 0 1 1.85-.602c.24 0 .481.026.713.078l-1.126 2.4a.743.743 0 0 0 .301.965c.923.519 2.623 1.763 3.198 4.103l-5.436-2.4zm3.37-2.543l1.2-2.56a.756.756 0 0 0-.381-1.015 4.652 4.652 0 0 0-1.839-.378c-.935 0-1.878.282-2.663.873a4.394 4.394 0 0 0-1.504 2.078 4.486 4.486 0 0 0-2.112-.535 4.525 4.525 0 0 0-3.685 1.907c-.267.378-.108.912.312 1.106l1.182.545c-1.46 1.833-1.296 3.885-.586 5.798a.752.752 0 0 0 1.17.319l4.893-3.875c.332.861.645 1.825.645 2.752 0 2.462-1.38 3.768-1.436 3.82l.02.022H4.874a.487.487 0 0 0-.487.488v.375c0 .269.217.487.487.487h10.309a.487.487 0 0 0 .486-.487v-.375a.488.488 0 0 0-.486-.488h-4.498c.517-.803 1.101-2.084 1.101-3.842 0-.922-.235-1.81-.518-2.629l4.986 2.202a.748.748 0 0 0 1.056-.683c-.018-1.599-.605-4.204-3.505-5.905z"/>
      </SvgIcon>
    )
  }
}

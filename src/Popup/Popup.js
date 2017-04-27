/**
 * Компонент попапа
 * Скетч: * https://zpl.io/ZTWunL
 */

import React, { Component, PropTypes, cloneElement } from 'react'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import pure from 'recompose/pure'
import IconButton from '../IconButton'
import ClearIcon from '../icons/forms/ClearIcon'
import zIndexStack from '../hoc/z-index-stack'
import { POPUP_ZINDEX } from '../constants/z-indexes'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

const ESCAPE = 27

@pure
@zIndexStack(POPUP_ZINDEX)
@injectSheet((theme) => ({
  popup: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box',
    borderRadius: theme.popup.borderRadius,
    boxShadow: theme.popup.boxShadow,
    padding: theme.popup.padding,
    width: theme.popup.width,
    backgroundColor: theme.popup.background,
    fontSize: theme.popup.font.size
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: theme.popup.backdropBackground,
    transitionDuration: theme.popup.animationDuration,
    transitionProperty: 'margin-top, opacity'
  },
  appear: {
    marginTop: -10,
    opacity: 0.01
  },
  appearActive: {
    marginTop: 0,
    opacity: 1
  },
  title: {
    marginBottom: 15,
    fontSize: theme.popup.font.titleSize,
    fontWeight: 500,
    lineHeight: 1.25
  },
  close: {
    position: 'absolute !important',
    top: 18,
    right: 23
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 25
  },
  button: {
    '& + $button': {
      marginLeft: '12%'
    }
  }
}))
export default class Popup extends Component {

  static propTypes = {
    /**
     * Css-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Css-класс для фонового слоя
     */
    backdropClassName: PropTypes.string,
    /**
     * Inline-стили для фонового слоя
     */
    backdropStyle: PropTypes.object,
    /**
     * Контент для попапа
     */
    children: PropTypes.node,
    /**
     * Заголовок
     */
    title: PropTypes.node,
    /**
     * Контролирует видимость попапа
     */
    isOpen: PropTypes.bool,
    /**
     * Кнопка успешного действия (если она одна, то будет расятнута на все ширину)
     */
    okButton: PropTypes.node,
    /**
     * Кнопка отмены
     */
    cancelButton: PropTypes.node,
    /**
     * Кнопка закрытия попапа
     */
    showClose: PropTypes.bool,
    /**
     * Закрытие попапа кнопкой esc
     */
    closeOnEsc: PropTypes.bool,
    /**
     * Закрытие попапа по клику вне него
     */
    closeOnOutsideClick: PropTypes.bool,
    /**
     * Коллбек вызывающийся после открытия попапа
     */
    onOpened: PropTypes.func,
    /**
     * Коллбек вызывающийся при нажатии на крестик (автоматически проставляется, если используется `@providePopup`)
     */
    onClose: PropTypes.func,
    /**
     * Коллбек вызывающийся после закрытия попапа
     */
    onClosed: PropTypes.func,
    /**
     * Коллбек вызывающийся при монтировании/размонтировании контейнера
     */
    containerRef: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    showClose: true,
    closeOnEsc: true,
    closeOnOutsideClick: true,
    onOpened: () => {},
    onClose: () => {},
    onClosed: () => {},
    containerRef: () => {}
  };

  get css() {
    const { sheet: { classes: css } } = this.props
    return css
  }

  componentDidMount() {
    this.renderContainer()
  }

  componentDidUpdate() {
    this.renderContainer()
  }

  componentWillUnmount() {
    this.unrenderContainer()
  }

  renderContainer() {
    if (this.props.isOpen) {
      if (!this.node) {
        this.node = document.createElement('div')
        this.node.style.position = 'absolute'
        this.node.style.zIndex = this.props.zIndex
        document.body.appendChild(this.node)
        this.props.containerRef(this.node)
      }

      renderSubtreeIntoContainer(
        this,
        this.renderPopup(),
        this.node
      )

      if (this.props.closeOnEsc)
        document.addEventListener('keydown', this.handleKeyDown)

      if (this.props.closeOnOutsideClick)
        document.addEventListener('click', this.handleOutsideClick)

      this.node.addEventListener('transitionend', this.handleTransitionEnd)
    } else {
      this.unrenderContainer()
    }
  }

  unrenderContainer() {
    if (this.node) {
      unmountComponentAtNode(this.node)
      document.body.removeChild(this.node)
      this.node = null

      if (this.props.closeOnEsc)
        document.removeEventListener('keydown', this.handleKeyDown)

      if (this.props.closeOnOutsideClick)
        document.removeEventListener('click', this.handleOutsideClick)

      this.props.onClosed()
      this.props.containerRef()
    }
  }

  handleKeyDown = event => {
    if (event.keyCode === ESCAPE) this.props.onClose()
  }

  handleOutsideClick = event => {
    if (!this.popup.contains(event.target)) {
      event.stopPropagation()
      this.props.onClose()
    }
  }

  handleTransitionEnd = () => {
    this.node.removeEventListener('transitionend', this.handleTransitionEnd)
    this.props.onOpened()
  }

  renderPopup() {
    const {
      children,
      className,
      style,
      backdropClassName,
      backdropStyle,
      title,
      showClose,
      okButton,
      cancelButton,
      onClose,
      theme
    } = this.props

    const css = this.css
    const okButtonEl = this.renderButton(okButton)
    const cancelButtonEl = this.renderButton(cancelButton)

    return (
      <ReactCSSTransitionGroup
        transitionName={{
          appear: css.appear,
          appearActive: css.appearActive
        }}
        transitionAppear={true}
        transitionAppearTimeout={200}
        transitionEnter={false}
        transitionLeave={false}>
        <div
          style={backdropStyle}
          className={classnames(css.backdrop, backdropClassName)}>
          <div
            ref={el => { this.popup = el }}
            style={style}
            className={classnames(css.popup, className)}>
            {showClose &&
              <IconButton
                type="flat"
                buttonType="button"
                size="small"
                className={css.close}
                onClick={onClose}>
                <ClearIcon color={theme.popup.closeColor} />
              </IconButton>
            }
            {title &&
              <header className={css.title}>
                {title}
              </header>
            }
            {children}
            {(okButton || cancelButton) &&
              <footer className={css.buttons}>
                {okButtonEl}
                {cancelButtonEl}
              </footer>
            }
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }

  renderButton(button) {
    if (button) {
      const { className, ...other } = button.props
      const css = this.css

      return cloneElement(button, {
        ...other,
        block: true,
        size: 'small',
        className: classnames(className, css.button)
      })
    }
  }

  render() {
    return null
  }

}

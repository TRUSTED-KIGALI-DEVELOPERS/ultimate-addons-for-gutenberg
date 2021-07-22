(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/settings"],{

/***/ "./src/blocks/forms/settings.js":
/*!**************************************!*\
  !*** ./src/blocks/forms/settings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);









var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var formLabel = attributes.formLabel,
      buttonAlign = attributes.buttonAlign,
      buttonSize = attributes.buttonSize,
      confirmationType = attributes.confirmationType,
      confirmationMessage = attributes.confirmationMessage,
      failedMessage = attributes.failedMessage,
      confirmationUrl = attributes.confirmationUrl,
      sendAfterSubmitEmail = attributes.sendAfterSubmitEmail,
      afterSubmitToEmail = attributes.afterSubmitToEmail,
      afterSubmitCcEmail = attributes.afterSubmitCcEmail,
      afterSubmitBccEmail = attributes.afterSubmitBccEmail,
      afterSubmitEmailSubject = attributes.afterSubmitEmailSubject,
      submitColor = attributes.submitColor,
      submitColorHover = attributes.submitColorHover,
      submitBgColor = attributes.submitBgColor,
      submitBgColorHover = attributes.submitBgColorHover,
      submitborderStyle = attributes.submitborderStyle,
      submitborderWidth = attributes.submitborderWidth,
      submitborderRadius = attributes.submitborderRadius,
      submitborderColor = attributes.submitborderColor,
      submitborderHoverColor = attributes.submitborderHoverColor,
      vPaddingSubmit = attributes.vPaddingSubmit,
      hPaddingSubmit = attributes.hPaddingSubmit,
      submitTextloadGoogleFonts = attributes.submitTextloadGoogleFonts,
      submitTextFontFamily = attributes.submitTextFontFamily,
      submitTextFontWeight = attributes.submitTextFontWeight,
      submitTextFontSubset = attributes.submitTextFontSubset,
      submitTextFontSize = attributes.submitTextFontSize,
      submitTextFontSizeType = attributes.submitTextFontSizeType,
      submitTextFontSizeTablet = attributes.submitTextFontSizeTablet,
      submitTextFontSizeMobile = attributes.submitTextFontSizeMobile,
      submitTextLineHeightType = attributes.submitTextLineHeightType,
      submitTextLineHeight = attributes.submitTextLineHeight,
      submitTextLineHeightTablet = attributes.submitTextLineHeightTablet,
      submitTextLineHeightMobile = attributes.submitTextLineHeightMobile,
      labelloadGoogleFonts = attributes.labelloadGoogleFonts,
      labelFontFamily = attributes.labelFontFamily,
      labelFontWeight = attributes.labelFontWeight,
      labelFontSubset = attributes.labelFontSubset,
      labelFontSize = attributes.labelFontSize,
      labelFontSizeType = attributes.labelFontSizeType,
      labelFontSizeTablet = attributes.labelFontSizeTablet,
      labelFontSizeMobile = attributes.labelFontSizeMobile,
      labelLineHeightType = attributes.labelLineHeightType,
      labelLineHeight = attributes.labelLineHeight,
      labelLineHeightTablet = attributes.labelLineHeightTablet,
      labelLineHeightMobile = attributes.labelLineHeightMobile,
      inputloadGoogleFonts = attributes.inputloadGoogleFonts,
      inputFontFamily = attributes.inputFontFamily,
      inputFontWeight = attributes.inputFontWeight,
      inputFontSubset = attributes.inputFontSubset,
      inputFontSize = attributes.inputFontSize,
      inputFontSizeType = attributes.inputFontSizeType,
      inputFontSizeTablet = attributes.inputFontSizeTablet,
      inputFontSizeMobile = attributes.inputFontSizeMobile,
      inputLineHeightType = attributes.inputLineHeightType,
      inputLineHeight = attributes.inputLineHeight,
      inputLineHeightTablet = attributes.inputLineHeightTablet,
      inputLineHeightMobile = attributes.inputLineHeightMobile,
      toggleSize = attributes.toggleSize,
      toggleWidthSize = attributes.toggleWidthSize,
      toggleHeightSize = attributes.toggleHeightSize,
      toggleActiveColor = attributes.toggleActiveColor,
      labelColor = attributes.labelColor,
      inputColor = attributes.inputColor,
      bgColor = attributes.bgColor,
      inputplaceholderColor = attributes.inputplaceholderColor,
      inputactiveColor = attributes.inputactiveColor,
      inputborderStyle = attributes.inputborderStyle,
      inputborderWidth = attributes.inputborderWidth,
      inputborderRadius = attributes.inputborderRadius,
      inputborderColor = attributes.inputborderColor,
      inputborderHoverColor = attributes.inputborderHoverColor,
      vPaddingField = attributes.vPaddingField,
      hPaddingField = attributes.hPaddingField,
      fieldGap = attributes.fieldGap,
      formStyle = attributes.formStyle,
      overallAlignment = attributes.overallAlignment,
      reCaptchaEnable = attributes.reCaptchaEnable,
      reCaptchaType = attributes.reCaptchaType,
      reCaptchaSecretKeyV2 = attributes.reCaptchaSecretKeyV2,
      reCaptchaSiteKeyV2 = attributes.reCaptchaSiteKeyV2,
      reCaptchaSecretKeyV3 = attributes.reCaptchaSecretKeyV3,
      reCaptchaSiteKeyV3 = attributes.reCaptchaSiteKeyV3,
      hidereCaptchaBatch = attributes.hidereCaptchaBatch,
      successMessageTextColor = attributes.successMessageTextColor,
      successMessageBGColor = attributes.successMessageBGColor,
      successMessageBorderColor = attributes.successMessageBorderColor,
      successMessageBorderStyle = attributes.successMessageBorderStyle,
      successMessageBorderWidth = attributes.successMessageBorderWidth,
      failedMessageTextColor = attributes.failedMessageTextColor,
      failedMessageBorderColor = attributes.failedMessageBorderColor,
      failedMessageBorderStyle = attributes.failedMessageBorderStyle,
      failedMessageBorderWidth = attributes.failedMessageBorderWidth,
      failedMessageBGColor = attributes.failedMessageBGColor;

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hidden Field Label', 'ultimate-addons-for-gutenberg'),
      value: formLabel,
      onChange: function onChange(value) {
        return setAttributes({
          formLabel: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: formStyle,
      onChange: function onChange(value) {
        return setAttributes({
          formStyle: value
        });
      },
      options: [{
        value: 'boxed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Boxed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'underlined',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Underlined', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Overall Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'left',
      icon: "editor-alignleft",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'ultimate-addons-for-gutenberg'),
      onClick: function onClick() {
        return setAttributes({
          overallAlignment: 'left'
        });
      },
      "aria-pressed": 'left' === overallAlignment,
      isPrimary: 'left' === overallAlignment
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'center',
      icon: "editor-aligncenter",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg'),
      onClick: function onClick() {
        return setAttributes({
          overallAlignment: 'center'
        });
      },
      "aria-pressed": 'center' === overallAlignment,
      isPrimary: 'center' === overallAlignment
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'right',
      icon: "editor-alignright",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg'),
      onClick: function onClick() {
        return setAttributes({
          overallAlignment: 'right'
        });
      },
      "aria-pressed": 'right' === overallAlignment,
      isPrimary: 'right' === overallAlignment
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Confirmation Type', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-forms-button-group",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Confirmation Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'message',
      isSmall: true,
      isPrimary: confirmationType === 'message',
      "aria-pressed": confirmationType === 'message',
      onClick: function onClick() {
        return setAttributes({
          confirmationType: 'message'
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'url',
      isSmall: true,
      isPrimary: confirmationType === 'url',
      "aria-pressed": confirmationType === 'url',
      onClick: function onClick() {
        return setAttributes({
          confirmationType: 'url'
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('URL', 'ultimate-addons-for-gutenberg'))), 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Success Message', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
      label: "Success Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter a message you want to display after successfull form submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationMessage,
      onChange: function onChange(value) {
        return setAttributes({
          confirmationMessage: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        Color: successMessageTextColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: successMessageTextColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          successMessageTextColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: successMessageBGColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: successMessageBGColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          successMessageBGColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: successMessageBorderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          successMessageBorderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: successMessageBorderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          successMessageBorderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: successMessageBorderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: successMessageBorderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          successMessageBorderColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Error Message ', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
      label: "Error Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter a message you want to display after unsuccessfull form submission', 'ultimate-addons-for-gutenberg'),
      value: failedMessage,
      onChange: function onChange(value) {
        return setAttributes({
          failedMessage: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: failedMessageTextColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: failedMessageTextColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          failedMessageTextColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: failedMessageBGColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: failedMessageBGColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          failedMessageBGColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: failedMessageBorderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          failedMessageBorderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: failedMessageBorderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          failedMessageBorderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: failedMessageBorderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: failedMessageBorderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          failedMessageBorderColor: colorValue
        });
      },
      allowReset: true
    }))), 'url' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Success Redirect URL', 'ultimate-addons-for-gutenberg'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter a URL you want to redirect your page to after form Submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationUrl,
      onChange: function onChange(value) {
        return setAttributes({
          confirmationUrl: value
        });
      }
    }));
  };

  var submitButtonSettings = function submitButtonSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Submit Button', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Size', 'ultimate-addons-for-gutenberg'),
      value: buttonSize,
      onChange: function onChange(value) {
        return setAttributes({
          buttonSize: value
        });
      },
      options: [{
        value: 'small',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Small', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'medium',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Medium', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'large',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Large', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'extralarge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Extra Large', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'full',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Full', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'left',
      icon: "editor-alignleft",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'ultimate-addons-for-gutenberg'),
      onClick: function onClick() {
        return setAttributes({
          buttonAlign: 'left'
        });
      },
      "aria-pressed": 'left' === buttonAlign,
      isPrimary: 'left' === buttonAlign
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'center',
      icon: "editor-aligncenter",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg'),
      onClick: function onClick() {
        return setAttributes({
          buttonAlign: 'center'
        });
      },
      "aria-pressed": 'center' === buttonAlign,
      isPrimary: 'center' === buttonAlign
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'right',
      icon: "editor-alignright",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg'),
      onClick: function onClick() {
        return setAttributes({
          buttonAlign: 'right'
        });
      },
      "aria-pressed": 'right' === buttonAlign,
      isPrimary: 'right' === buttonAlign
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-padding-control submit-btn-control',
      value: vPaddingSubmit,
      onChange: function onChange(value) {
        return setAttributes({
          vPaddingSubmit: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-padding-control submit-btn-control',
      value: hPaddingSubmit,
      onChange: function onChange(value) {
        return setAttributes({
          hPaddingSubmit: value
        });
      },
      min: 0,
      max: 100
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-normal-tab'
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-focus-tab'
      }]
    }, function (tabName) {
      var tabout_submitColor;

      if ('normal' === tabName.name) {
        tabout_submitColor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Submit Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: submitColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
          value: submitColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              submitColor: colorValue
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: submitBgColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
          value: submitBgColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              submitBgColor: colorValue
            });
          },
          allowReset: true
        }));
      } else {
        tabout_submitColor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Submit Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: submitColorHover
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
          value: submitColorHover,
          onChange: function onChange(colorValue) {
            return setAttributes({
              submitColorHover: colorValue
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: submitBgColorHover
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
          value: submitBgColorHover,
          onChange: function onChange(colorValue) {
            return setAttributes({
              submitBgColorHover: colorValue
            });
          },
          allowReset: true
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tabout_submitColor);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: submitborderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          submitborderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' != submitborderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: submitborderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          submitborderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: submitborderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          submitborderRadius: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: submitborderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: submitborderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          submitborderColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: submitborderHoverColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: submitborderHoverColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          submitborderHoverColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: submitTextloadGoogleFonts,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextloadGoogleFonts', 'ultimate-addons-for-gutenberg')
      },
      fontFamily: {
        value: submitTextFontFamily,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextFontFamily', 'ultimate-addons-for-gutenberg')
      },
      fontWeight: {
        value: submitTextFontWeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextFontWeight', 'ultimate-addons-for-gutenberg')
      },
      fontSubset: {
        value: submitTextFontSubset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextFontSubset', 'ultimate-addons-for-gutenberg')
      },
      fontSizeType: {
        value: submitTextFontSizeType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextFontSizeType', 'ultimate-addons-for-gutenberg')
      },
      fontSize: {
        value: submitTextFontSize,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextFontSize', 'ultimate-addons-for-gutenberg')
      },
      fontSizeMobile: {
        value: submitTextFontSizeMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextFontSizeMobile', 'ultimate-addons-for-gutenberg')
      },
      fontSizeTablet: {
        value: submitTextFontSizeTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextFontSizeTablet', 'ultimate-addons-for-gutenberg')
      },
      lineHeightType: {
        value: submitTextLineHeightType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextLineHeightType', 'ultimate-addons-for-gutenberg')
      },
      lineHeight: {
        value: submitTextLineHeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextLineHeight', 'ultimate-addons-for-gutenberg')
      },
      lineHeightMobile: {
        value: submitTextLineHeightMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextLineHeightMobile', 'ultimate-addons-for-gutenberg')
      },
      lineHeightTablet: {
        value: submitTextLineHeightTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('submitTextLineHeightTablet', 'ultimate-addons-for-gutenberg')
      }
    })));
  };

  var afterSubmitActions = function afterSubmitActions() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('After Submit Actions'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["CheckboxControl"], {
      label: "Email",
      checked: sendAfterSubmitEmail,
      onChange: function onChange(value) {
        return setAttributes({
          sendAfterSubmitEmail: value
        });
      }
    }), true === sendAfterSubmitEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], {
      className: "uagb-size-type-field-tabs components-base-control uagb-size-type-field__common-tabs uagb-inline-margin uagb-email-controls-tabs",
      activeClass: "active-tab",
      tabs: [{
        name: 'to',
        title: 'To',
        className: 'uagb-desktop-tab uagb-responsive-tabs'
      }, {
        name: 'cc',
        title: 'CC',
        className: 'uagb-tablet-tab uagb-responsive-tabs'
      }, {
        name: 'bcc',
        title: 'BCC',
        className: 'uagb-mobile-tab uagb-responsive-tabs'
      }]
    }, function (tab) {
      var tabout;

      if ('to' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('To', 'ultimate-addons-for-gutenberg'),
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Email', 'ultimate-addons-for-gutenberg'),
          value: afterSubmitToEmail,
          onChange: function onChange(value) {
            return setAttributes({
              afterSubmitToEmail: value
            });
          }
        });
      } else if ('cc' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('CC', 'ultimate-addons-for-gutenberg'),
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Email', 'ultimate-addons-for-gutenberg'),
          value: afterSubmitCcEmail,
          onChange: function onChange(value) {
            return setAttributes({
              afterSubmitCcEmail: value
            });
          }
        });
      } else {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('BCC', 'ultimate-addons-for-gutenberg'),
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Email', 'ultimate-addons-for-gutenberg'),
          value: afterSubmitBccEmail,
          onChange: function onChange(value) {
            return setAttributes({
              afterSubmitBccEmail: value
            });
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "uagb-form-emailto"
      }, tabout);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      value: afterSubmitEmailSubject,
      onChange: function onChange(value) {
        return setAttributes({
          afterSubmitEmailSubject: value
        });
      }
    })));
  };

  var designSettings = function designSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Design', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Label Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: labelloadGoogleFonts,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelloadGoogleFonts', 'ultimate-addons-for-gutenberg')
      },
      fontFamily: {
        value: labelFontFamily,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelFontFamily', 'ultimate-addons-for-gutenberg')
      },
      fontWeight: {
        value: labelFontWeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelFontWeight', 'ultimate-addons-for-gutenberg')
      },
      fontSubset: {
        value: labelFontSubset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelFontSubset', 'ultimate-addons-for-gutenberg')
      },
      fontSizeType: {
        value: labelFontSizeType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelFontSizeType', 'ultimate-addons-for-gutenberg')
      },
      fontSize: {
        value: labelFontSize,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelFontSize', 'ultimate-addons-for-gutenberg')
      },
      fontSizeMobile: {
        value: labelFontSizeMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelFontSizeMobile', 'ultimate-addons-for-gutenberg')
      },
      fontSizeTablet: {
        value: labelFontSizeTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelFontSizeTablet', 'ultimate-addons-for-gutenberg')
      },
      lineHeightType: {
        value: labelLineHeightType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelLineHeightType', 'ultimate-addons-for-gutenberg')
      },
      lineHeight: {
        value: labelLineHeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelLineHeight', 'ultimate-addons-for-gutenberg')
      },
      lineHeightMobile: {
        value: labelLineHeightMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelLineHeightMobile', 'ultimate-addons-for-gutenberg')
      },
      lineHeightTablet: {
        value: labelLineHeightTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('labelLineHeightTablet', 'ultimate-addons-for-gutenberg')
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Input Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: inputloadGoogleFonts,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputloadGoogleFonts', 'ultimate-addons-for-gutenberg')
      },
      fontFamily: {
        value: inputFontFamily,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputFontFamily', 'ultimate-addons-for-gutenberg')
      },
      fontWeight: {
        value: inputFontWeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputFontWeight', 'ultimate-addons-for-gutenberg')
      },
      fontSubset: {
        value: inputFontSubset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputFontSubset', 'ultimate-addons-for-gutenberg')
      },
      fontSizeType: {
        value: inputFontSizeType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputFontSizeType', 'ultimate-addons-for-gutenberg')
      },
      fontSize: {
        value: inputFontSize,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputFontSize', 'ultimate-addons-for-gutenberg')
      },
      fontSizeMobile: {
        value: inputFontSizeMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputFontSizeMobile', 'ultimate-addons-for-gutenberg')
      },
      fontSizeTablet: {
        value: inputFontSizeTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputFontSizeTablet', 'ultimate-addons-for-gutenberg')
      },
      lineHeightType: {
        value: inputLineHeightType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputLineHeightType', 'ultimate-addons-for-gutenberg')
      },
      lineHeight: {
        value: inputLineHeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputLineHeight', 'ultimate-addons-for-gutenberg')
      },
      lineHeightMobile: {
        value: inputLineHeightMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputLineHeightMobile', 'ultimate-addons-for-gutenberg')
      },
      lineHeightTablet: {
        value: inputLineHeightTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('inputLineHeightTablet', 'ultimate-addons-for-gutenberg')
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Checkbox/Radio Size', 'ultimate-addons-for-gutenberg'),
      value: toggleSize,
      onChange: function onChange(value) {
        return setAttributes({
          toggleSize: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Toggle Width', 'ultimate-addons-for-gutenberg'),
      value: toggleWidthSize,
      onChange: function onChange(value) {
        return setAttributes({
          toggleWidthSize: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Toggle Height', 'ultimate-addons-for-gutenberg'),
      value: toggleHeightSize,
      onChange: function onChange(value) {
        return setAttributes({
          toggleHeightSize: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Toggle Active Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: toggleActiveColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: toggleActiveColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          toggleActiveColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Label Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: labelColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: labelColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          labelColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Input Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: inputColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: inputColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          inputColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Field Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: bgColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: bgColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          bgColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Field Placeholder Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: inputplaceholderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: inputplaceholderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          inputplaceholderColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Field Active Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: inputactiveColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: inputactiveColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          inputactiveColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: inputborderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          inputborderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' != inputborderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: inputborderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          inputborderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), 'boxed' == formStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: inputborderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          inputborderRadius: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: inputborderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: inputborderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          inputborderColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: inputborderHoverColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: inputborderHoverColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          inputborderHoverColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing between fields (px)', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-padding-control',
      value: fieldGap,
      onChange: function onChange(value) {
        return setAttributes({
          fieldGap: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Field Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-padding-control',
      value: vPaddingField,
      onChange: function onChange(value) {
        return setAttributes({
          vPaddingField: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-padding-control',
      value: hPaddingField,
      onChange: function onChange(value) {
        return setAttributes({
          hPaddingField: value
        });
      },
      min: 0,
      max: 100
    }));
  };

  var googleReCaptcha = function googleReCaptcha() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Google reCAPTCHA', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable reCAPTCHA ', 'ultimate-addons-for-gutenberg'),
      checked: reCaptchaEnable,
      onChange: function onChange() {
        return setAttributes({
          reCaptchaEnable: !reCaptchaEnable
        });
      }
    }), reCaptchaEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Version', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaType,
      onChange: function onChange(value) {
        return setAttributes({
          reCaptchaType: value
        });
      },
      options: [{
        value: 'v2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('V2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'v3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('V3', 'ultimate-addons-for-gutenberg')
      }]
    }), reCaptchaEnable && 'v2' === reCaptchaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Site Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSiteKeyV2,
      onChange: function onChange(value) {
        return setAttributes({
          reCaptchaSiteKeyV2: value
        });
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter v2 Keys', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Secret Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSecretKeyV2,
      onChange: function onChange(value) {
        return setAttributes({
          reCaptchaSecretKeyV2: value
        });
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter v2 Keys', 'ultimate-addons-for-gutenberg')
    })), reCaptchaEnable && 'v3' === reCaptchaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Site Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSiteKeyV3,
      onChange: function onChange(value) {
        return setAttributes({
          reCaptchaSiteKeyV3: value
        });
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter v3 Keys', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Secret Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSecretKeyV3,
      onChange: function onChange(value) {
        return setAttributes({
          reCaptchaSecretKeyV3: value
        });
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter v3 Keys', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hide reCAPTCHA Badge', 'ultimate-addons-for-gutenberg'),
      checked: hidereCaptchaBatch,
      onChange: function onChange() {
        return setAttributes({
          hidereCaptchaBatch: !hidereCaptchaBatch
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Know More', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ExternalLink"], {
      href: "https://www.google.com/recaptcha/admin/create"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Get Keys', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ExternalLink"], {
      href: "https://developers.google.com/recaptcha/intro"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(' | Documentation', 'ultimate-addons-for-gutenberg')));
  };

  var loadsubmittextGoogleFonts;

  if (submitTextloadGoogleFonts == true) {
    var qconfig = {
      google: {
        families: [submitTextFontFamily + (submitTextFontWeight ? ':' + submitTextFontWeight : '')]
      }
    };
    loadsubmittextGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: qconfig
    });
  }

  var loadlabelGoogleFonts;

  if (labelloadGoogleFonts == true) {
    var _qconfig = {
      google: {
        families: [labelFontFamily + (labelFontWeight ? ':' + labelFontWeight : '')]
      }
    };
    loadlabelGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: _qconfig
    });
  }

  var loadinputGoogleFonts;

  if (inputloadGoogleFonts == true) {
    var _qconfig2 = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadinputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: _qconfig2
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, generalSettings(), submitButtonSettings(), afterSubmitActions(), designSettings(), googleReCaptcha()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, loadsubmittextGoogleFonts, loadlabelGoogleFonts, loadinputGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map
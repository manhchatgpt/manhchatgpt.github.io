"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{77064:function(e,n,t){t.d(n,{$:function(){return m},u:function(){return p}});var r=t(31501),a=t(61079),s=t(14806),i=t(35250),o=t(19841),u=t(70079),l=t(65921),c=t(34303);function d(){var e=(0,s.Z)(['\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n',"\n","\n"]);return d=function(){return e},e}function f(){var e=(0,s.Z)(["absolute w-2 h-2 -z-10"]);return f=function(){return e},e}function p(e){var n=e.text,t=e.children;return(0,i.jsx)("div",{className:"tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700","data-content":n,children:t})}var m=function(e){var n=e.children,t=e.label,s=e.enterDelay,c=void 0===s?0:s,d=e.leaveDelay,f=void 0===d?50:d,p=e.placement,m=void 0===p?"bottom":p,v=e.offset,b=e.withArrow,x=e.interactive,g=void 0!==x&&x,y=e.wide,w=(0,u.useState)(!1),Z=w[0],j=w[1],k=(0,u.useState)(null),_=k[0],P=k[1],S=(0,u.useState)(null),N=S[0],C=S[1],A=(0,u.useState)(null),T=A[0],R=A[1],E=(0,l.D)(_,N,{placement:m,modifiers:[{name:"offset",options:{offset:void 0===v?[0,14]:v}},{name:"arrow",options:{element:T}},]}),U=E.styles,M=E.attributes,F=E.forceUpdate,D=(0,u.useRef)(),O=(0,u.useRef)(),z=(0,u.useCallback)(function(){null==F||F(),O.current&&clearTimeout(O.current),D.current=setTimeout(function(){return j(!0)},c)},[c,F]),G=(0,u.useCallback)(function(){D.current&&clearTimeout(D.current),O.current=setTimeout(function(){return j(!1)},f)},[f]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{ref:P,onMouseEnter:z,onMouseLeave:G,children:n}),(0,i.jsxs)("div",(0,a.Z)((0,r.Z)({ref:C,style:U.popper},M.popper),{className:(0,o.Z)("relative z-10 m-0 rounded p-1 transition-opacity",Z?"opacity-100":"pointer-events-none opacity-0",void 0!==y&&y?"max-w-sm":"max-w-xs","border border-black/10 bg-gray-100"),onMouseEnter:g?z:void 0,onMouseLeave:g?G:void 0,children:[t,(void 0===b||b)&&(0,i.jsx)(h,{ref:R,$placement:m})]}))]})},v=c.Z.div(d(),function(e){return"bottom"===e.$placement&&"-top-1 left-1/2 -translate-x-[50%] rotate-[225deg]"},function(e){return"top"===e.$placement&&"before:top-0 before:rotate-45"}),h=(0,c.Z)(v)(f())},86885:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(61706),a=t(45813),s=t(35250),i=t(61432),o=t(70079),u=t(1454),l=t(12762),c=t(98943),d=t(33264),f=t(66285),p=t(74516),m=t(35e3),v=t(69858),h=t(77507);function b(e){var n=e.isOpen,t=e.onClose,b=(0,o.useRef)(null),x=(0,f.hz)(),g=(0,l.WS)(),y=(0,o.useState)(!1),w=y[0],Z=y[1],j=(0,i.useRouter)(),k=(0,o.useCallback)(function(){g(c.s6.closeAccountPaymentModal),t()},[t,g]),_=(0,o.useCallback)((0,r.Z)(function(){var e;return(0,a.__generator)(this,function(n){switch(n.label){case 0:Z(!0),g(c.s6.clickAccountPaymentCheckout),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,d.ZP.submitCheckoutForm()];case 2:return e=n.sent(),j.push(e.url),[3,5];case 3:return n.sent(),p.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return Z(!1),[7];case 5:return[2]}})}),[j,g,Z]),P=(0,o.useCallback)((0,r.Z)(function(){var e;return(0,a.__generator)(this,function(n){switch(n.label){case 0:Z(!0),g(c.s6.clickAccountCustomerPortal),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,d.ZP.fetchCustomerPortalUrl()];case 2:return e=n.sent(),j.push(e.url),[3,5];case 3:return n.sent(),p.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return Z(!1),[7];case 5:return[2]}})}),[j,g,Z]),S=(0,f.mA)(function(e){var n;return null===(n=e.accountPlan)||void 0===n?void 0:n.hasCustomerObject}),N=x.has("disable_upgrade_ui");return(0,s.jsxs)(m.x,{isOpen:n,onClose:t,focusRef:b,children:[(0,s.jsxs)("div",{className:"flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",children:[(0,s.jsx)("span",{className:"text-base font-semibold sm:text-base",children:"Your account"}),(0,s.jsx)("button",{className:"text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",onClick:k,children:(0,s.jsx)(u.q5L,{className:"h-6 w-6"})})]}),(0,s.jsxs)("div",{className:"grid sm:grid-cols-2",children:[(0,s.jsx)("div",{className:"relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",children:(0,s.jsx)(v.Oi,{rowElements:[(0,s.jsx)(v.Cu,{text:"Free plan"},"row-free-plan-name"),(0,s.jsx)(v.hi,{variant:"disabled",disabled:!0,text:h.S.free.callToAction.active},"row-free-plan-button"),(0,s.jsx)(v.G,{variant:"secondary",text:h.S.free.demandAccess},"row-free-plan-demand"),(0,s.jsx)(v.G,{variant:"secondary",text:h.S.free.responseSpeed},"row-free-plan-speed"),(0,s.jsx)(v.G,{className:"sm:pb-2",variant:"secondary",text:h.S.free.modelFeatures},"row-free-plan-updates"),]})}),(0,s.jsx)("div",{className:"relative order-1 col-span-1 sm:order-2",children:(0,s.jsx)(v.Oi,{rowElements:[(0,s.jsx)(v.Cu,{text:h.S.plus.name,children:(0,s.jsx)("span",{className:"font-semibold text-gray-500",children:h.S.plus.costInDollars})},"row-plus-plan-title"),(0,s.jsx)(v.hi,{variant:"primary",disabledText:N?"Due to high demand, we've temporarily paused upgrades.":"",disabled:w,isLoading:w,ref:b,onClick:_,text:h.S.plus.callToAction.inactivePayment},"row-plus-plan-button"),(0,s.jsx)(v.G,{variant:"primary",text:h.S.plus.demandAccess},"row-plus-plan-demand"),(0,s.jsx)(v.G,{variant:"primary",text:h.S.plus.responseSpeed},"row-plus-plan-speed"),(0,s.jsx)(v.G,{className:"sm:pb-2",variant:"primary",text:h.S.plus.modelFeatures},"row-plus-plan-updates"),S&&(0,s.jsx)(v.nR,{className:"sm:pb-1",isLoading:w,text:h.S.manageSubscription.callToAction,onClick:P},"row-plus-plan-manage"),]})})]})]})}},35e3:function(e,n,t){t.d(n,{x:function(){return u}});var r=t(14806),a=t(35250),s=t(34303),i=t(73925);function o(){var e=(0,r.Z)(["flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);return o=function(){return e},e}var u=function(e){var n=e.children,t=e.isOpen,r=e.onClose,s=e.focusRef;return(0,a.jsx)(i.Z,{size:"fullscreen",isOpen:t,onModalClose:r,type:"success",title:"",className:"bg-transparent dark:bg-transparent",initialFocusRef:s,children:(0,a.jsx)("div",{className:"flex h-full flex-col items-center justify-start",children:(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(l,{children:n})})})})},l=s.Z.div(o())},69858:function(e,n,t){t.d(n,{Cu:function(){return h},G:function(){return g},Oi:function(){return v},hi:function(){return x},nR:function(){return y}});var r=t(14806),a=t(35250),s=t(19841),i=t(70079),o=t(1454),u=t(34303),l=t(39690),c=t(79876),d=t(77064);function f(){var e=(0,r.Z)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);return f=function(){return e},e}function p(){var e=(0,r.Z)(["gap-2 flex flex-row justify-start items-center text-sm"]);return p=function(){return e},e}function m(){var e=(0,r.Z)(["text-xl font-semibold justify-between items-center flex"]);return m=function(){return e},e}var v=function(e){var n=e.rowElements;return(0,a.jsx)(w,{children:n.map(function(e){return e})})},h=function(e){var n=e.className,t=e.text,r=e.children;return(0,a.jsxs)(j,{className:n,children:[(0,a.jsx)("span",{children:t}),r]})},b={"primary-disabled":"border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",primary:"border-none py-3 font-semibold",disabled:"dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"},x=(0,i.forwardRef)(function(e,n){var t=e.isLoading,r=void 0!==t&&t,i=e.disabled,u=e.onClick,f=e.variant,p=void 0===f?"primary":f,m=e.text,v=e.disabledText;return v?(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(d.$,{placement:"bottom",offset:[0,20],label:(0,a.jsx)(d.u,{children:v}),children:(0,a.jsxs)(l.z,{ref:n,as:"button",color:"disabled",className:(0,s.Z)("w-full",b[p]),children:[m,r&&(0,a.jsx)(c.ZP,{className:"animate-spin",icon:o.dAq})]})})}):(0,a.jsxs)(l.z,{disabled:void 0!==i&&i,onClick:u,openNewTab:!0,ref:n,as:"button",className:(0,s.Z)(b[p]),children:[(0,a.jsx)("span",{className:(0,s.Z)("inline-block",{"text-gray-700":"primary-disabled"===p,"text-white":"primary"===p}),children:m}),r&&(0,a.jsx)(c.ZP,{className:"animate-spin",icon:o.dAq})]})});x.displayName="PricingPlanButton";var g=function(e){var n=e.variant,t=void 0===n?"primary":n,r=e.className,i=e.text;return(0,a.jsxs)(Z,{className:r,children:[(0,a.jsx)(c.ZP,{icon:o._rq,className:(0,s.Z)("h-5 w-5",{"text-green-700":"primary"==t,"text-gray-400":"secondary"==t})}),(0,a.jsx)("span",{children:i})]})},y=function(e){var n=e.className,t=e.text,r=e.isLoading,s=e.onClick;return(0,a.jsx)(Z,{className:n,children:(0,a.jsxs)("button",{onClick:s,className:"flex flex-row items-center space-x-1 underline",children:[(0,a.jsx)("span",{children:t}),r&&(0,a.jsx)(c.ZP,{className:"animate-spin",icon:o.dAq})]})})},w=u.Z.div(f()),Z=u.Z.div(p()),j=u.Z.div(m())},77507:function(e,n,t){t.d(n,{S:function(){return r}});var r={free:{name:"Free plan",callToAction:{active:"Your current plan",inactive:"Your current plan"},costInDollars:"",demandAccess:"Available when demand is low",responseSpeed:"Standard response speed",modelFeatures:"Regular model updates"},plus:{name:"ChatGPT Plus",callToAction:{active:"Your current plan",inactive:"I'm interested",inactivePayment:"Upgrade plan"},costInDollars:"USD $20/mo",demandAccess:"Available even when demand is high",responseSpeed:"Faster response speed",modelFeatures:"Priority access to new features"},manageSubscription:{callToAction:"Manage my subscription"}}},85087:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(87762),a=t(70079),s=t(82018),i=t(33264),o=t(66285),u=t(27252);function l(){var e=(0,s.kP)(),n=e.session,t=e.loading,l=(0,o.mA)(function(e){return e.hasBeenSet}),c=(0,u.g)(function(e){return e.updateFlagValue}),d=(0,r.a)(["account-status"],function(){return i.ZP.getAccountStatus(null==n?void 0:n.accessToken)},{enabled:!t&&Boolean(null==n?void 0:n.accessToken),onError:function(){console.error("Unable to load account")},onSuccess:function(e){var n;m(e),c("highlightPlusUpgrade",!(null===(n=e.account_plan)||void 0===n?void 0:n.is_paid_subscription_active))}}),f=d.data,p=d.isLoading,m=(0,o.mA)(function(e){return{accountPlan:e.accountPlan,updateAccountPlanWithResponse:e.updateAccountPlanWithResponse}}).updateAccountPlanWithResponse;return(0,a.useMemo)(function(){return{accountStatusResponse:f,isLoading:!l&&p}},[f,l,p])}},49690:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(27215),a=t(70079),s=t(12762),i=t(98943),o=t(82018),u=t(34383),l=t(33264),c=t(66285);function d(e,n,t,d,f){var p=!(arguments.length>5)||void 0===arguments[5]||arguments[5],m=(0,c.mA)(function(e){return e.features}),v=(0,o.kP)().session,h=(0,s.WS)(t);(0,a.useEffect)(function(){p&&(m&&n.id&&(s.ZP.setUser(n,m,d,f),m.includes("log_statsig_events")&&u.m.setUser(n,d)),h(i.s6.pageLoad))},[m,n.id,p]),(0,a.useEffect)(function(){if(null==v?void 0:v.accessToken)l.ZP.setAccessToken(v.accessToken);else if(v&&!(null==v?void 0:v.error)){var e;null===r.default||void 0===r.default||r.default.captureMessage("Missing access token for User: ".concat(null==v?void 0:null===(e=v.user)||void 0===e?void 0:e.id," (").concat(null==v?void 0:v.accessToken,")"))}(null==v?void 0:v.error)==="RefreshAccessTokenError"&&(null===r.default||void 0===r.default||r.default.captureException(v.error),window._oaiHandleSessionExpired("page load",v.error))},[v,n.id]),(0,a.useEffect)(function(){document.title=e},[e])}},66285:function(e,n,t){t.d(n,{hz:function(){return c},mA:function(){return u},nR:function(){return l}});var r=t(31501),a=t(61079),s=t(70079),i=t(59268),o={lastUpdated:Date.now(),hasBeenSet:!1},u=(0,i.ZP)()(function(e){return(0,a.Z)((0,r.Z)({},o),{updateAccountPlanWithResponse:function(n){var t,r,a,s,i;e({accountPlan:{hasPaidSubscription:(null==n?void 0:null===(t=n.account_plan)||void 0===t?void 0:t.is_paid_subscription_active)||!1,subscriptionPlan:(null==n?void 0:null===(r=n.account_plan)||void 0===r?void 0:r.subscription_plan)||"chatgptplusfreeplan",accountUserRole:(null==n?void 0:null===(a=n.account_plan)||void 0===a?void 0:a.account_user_role)||"account-owner",wasPaidCustomer:(null==n?void 0:null===(s=n.account_plan)||void 0===s?void 0:s.was_paid_customer)||!1,hasCustomerObject:(null==n?void 0:null===(i=n.account_plan)||void 0===i?void 0:i.has_customer_object)||!1},features:(null==n?void 0:n.features)||[],hasBeenSet:!0})}})}),l=function(){return u(function(e){var n;return null===(n=e.accountPlan)||void 0===n?void 0:n.hasPaidSubscription})},c=function(){var e=u(function(e){return e.features});return(0,s.useMemo)(function(){return new Set(e)},[e])}},27252:function(e,n,t){t.d(n,{g:function(){return u}});var r=t(33861),a=t(31501),s=t(61079),i=t(59268),o={flags:{isUserInCanPayGroup:!1,highlightPlusUpgrade:!1,failwhaleBypassEnabled:!1}},u=(0,i.ZP)()(function(e,n){return(0,s.Z)((0,a.Z)({},o),{updateFlagValue:function(t,i){var o=n().flags;e({flags:(0,s.Z)((0,a.Z)({},o),(0,r.Z)({},t,i))})}})})},82018:function(e,n,t){t.d(n,{kP:function(){return f},w7:function(){return l}});var r=t(61706),a=t(31501),s=t(45813),i=t(87762),o=t(91515),u=t(61432);function l(e){(0,o.signOut)((0,a.Z)({callbackUrl:window.location.origin+"/api/auth/logout"},e))}function c(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(function(){var e,n;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/auth/session")];case 1:return[4,e.sent().json()];case 2:if(Object.keys(n=e.sent()).length)return[2,n];return[2,null]}})})).apply(this,arguments)}function f(e){var n=e||{},t=n.required,r=n.redirectTo,a=n.queryConfig,s=(0,u.useRouter)(),o=(0,i.a)(["session"],c,{onSettled:function(e,n){(null==a?void 0:a.onSettled)&&(null==a||a.onSettled(e,n)),!e&&t&&s.push(r)}});return{session:(null==o?void 0:o.data)||null,loading:(null==o?void 0:o.status)==="loading"}}},34383:function(e,n,t){t.d(n,{m:function(){return w}});var r=t(61706),a=t(35025),s=t(33468),i=t(47775),o=t(75106),u=t(87561),l=t(56164),c=t(45813),d=t(56340),f=t.n(d),p=new WeakMap,m=new WeakMap,v=new WeakSet,h=new WeakSet,b=function(){function e(){(0,a.Z)(this,e),(0,l.Z)(this,v),(0,l.Z)(this,h),(0,i.Z)(this,p,{writable:!0,value:!1}),(0,i.Z)(this,m,{writable:!0,value:void 0})}var n=e.prototype;return n.logEvent=function(e,n,t){(0,s.Z)(this,m)&&f().logEvent(e,n,t)},n.setUser=function(e,n){!(0,s.Z)(this,p)&&n?(0,u.Z)(this,v,x).call(this,(0,u.Z)(this,h,y).call(this,e,n.is_paid_subscription_active)):(0,s.Z)(this,p)&&(0,s.Z)(this,m)!==e.id&&n&&((0,o.Z)(this,m,e.id),f().updateUser((0,u.Z)(this,h,y).call(this,e,n.is_paid_subscription_active)))},e}();function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(function(e){return(0,c.__generator)(this,function(n){switch(n.label){case 0:if((0,s.Z)(this,p))return[3,2];return e&&(0,o.Z)(this,m,e.userID),[4,f().initialize("client-tnE5GCU2F2cTxRiMbvTczMDT1jpwIigZHsZSdqiy4u",e,{environment:"production"})];case 1:n.sent(),(0,o.Z)(this,p,!0),n.label=2;case 2:return[2]}})})).apply(this,arguments)}function y(e,n){return{userID:e.id,privateAttributes:{email:e.email},custom:{is_paid:n}}}var w=new b}}]);
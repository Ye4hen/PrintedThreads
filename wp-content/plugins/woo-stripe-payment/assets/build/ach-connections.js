(()=>{var e={713:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},567:e=>{"use strict";e.exports=window.jQuery},707:e=>{"use strict";e.exports=window.wc_stripe}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{var e=r(318),t=e(r(713)),n=e(r(567)),o=r(707);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){(0,t.default)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){o.BaseGateway.call(this,e),o.CheckoutGateway.call(this)}s.prototype.initialize=function(){window.addEventListener("hashchange",this.hashchange.bind(this)),(0,n.default)(document.body).on("payment_method_selected",this.payment_method_selected.bind(this)),(0,n.default)(document.body).on("click","#place_order",this.on_order_pay.bind(this))},s.prototype.checkout_place_order=function(){return this.payment_token_received=!0,o.CheckoutGateway.prototype.checkout_place_order.apply(this)},s.prototype.on_order_pay=function(e){var t=this;if(this.is_gateway_selected())if(this.is_change_payment_method()){var r=this.params,n=r.order_id,o=r.order_key;e.preventDefault(),this.create_setup_intent({order_id:n,order_key:o}).then((function(e){var r=e.setup_intent;t.handle_payment_method_setup({order_id:n,order_key:o,client_secret:r.client_secret})}))}else this.is_current_page("order_pay")&&(e.preventDefault(),this.process_order_pay())},s.prototype.handle_next_action=function(e){var t=this,r=e.client_secret;this.stripe.collectBankAccountForPayment({clientSecret:r,params:{payment_method_type:"us_bank_account",payment_method_data:{billing_details:{name:this.get_customer_name(this.get_billing_prefix()),email:this.fields.get("billing_email",null)}}}}).then((function(r){var n=r.paymentIntent,o=r.error;if(o)return t.submit_error(o);"requires_confirmation"===n.status?t.do_payment_confirmation(e):t.cancel_payment_processing()}))},s.prototype.handle_payment_method_setup=function(e){var t=this,r=e.client_secret;this.stripe.collectBankAccountForSetup({clientSecret:r,params:{payment_method_type:"us_bank_account",payment_method_data:{billing_details:{name:this.get_customer_name(this.get_billing_prefix()),email:this.fields.get("billing_email",null)}}}}).then((function(r){var n=r.setupIntent,o=r.error;if(o)return t.submit_error(o);"requires_confirmation"===n.status?t.do_setup_confirmation(e):t.cancel_payment_processing()}))},s.prototype.do_payment_confirmation=function(e){var t=this,r=e.client_secret,n=e.order_id,o=e.order_key;this.stripe.confirmUsBankAccountPayment(r).then((function(e){var r=e.paymentIntent,i=e.error;if(i)return t.submit_error(i);if("requires_payment_method"===r.status)t.cancel_payment_processing();else{if("requires_action"===r.status)return t.cancel_payment_processing(),t.submit_error({code:"ach_instant_only"});"processing"===r.status&&(t.set_nonce(r.payment_method),t.is_current_page("order_pay")?t.get_form().trigger("submit"):t.process_payment(n,o))}}))},s.prototype.do_setup_confirmation=function(e){var t=this,r=e.client_secret,n=e.order_id,o=e.order_key;this.stripe.confirmUsBankAccountSetup(r).then((function(e){var r=e.setupIntent,i=e.error;if(i)return t.submit_error(i);if("requires_payment_method"===r.status)t.cancel_payment_processing();else{if("requires_action"===r.status)return t.cancel_payment_processing(),t.submit_error({code:"ach_instant_only"});"succeeded"===r.status&&(t.set_nonce(r.payment_method),t.is_current_page("order_pay")||t.is_change_payment_method()?t.get_form().trigger("submit"):t.process_payment(n,o))}}))},s.prototype.hide_place_order=function(){},s.prototype.show_payment_button=function(){this.show_place_order()},s.prototype.cancel_payment_processing=function(){var e;(0,n.default)(this.container).closest("form").removeClass("processing"),null===(e=(0,n.default)(this.container).closest("form"))||void 0===e||e.unblock()},s.prototype.fees_enabled=function(){return"1"==this.params.fees_enabled},s.prototype.payment_method_selected=function(){this.fees_enabled()&&(0,n.default)(document.body).trigger("update_checkout")},s.prototype.create_setup_intent=function(e){var t=this;return new Promise((function(r,o){n.default.ajax({method:"POST",dataType:"json",data:a({payment_method:t.gateway_id},e),url:t.params.routes.base_path.replace("%s","wc-stripe/v1/subscriptions/setup-intent"),beforeSend:t.ajax_before_send.bind(t)}).done((function(e){e.code?o(e.message):r(e)})).fail((function(e,r,n){t.submit_error(n)}))}))},s.prototype=a(a(a({},o.BaseGateway.prototype),o.CheckoutGateway.prototype),s.prototype),new s(wc_stripe_ach_connections_params)})()})();
//# sourceMappingURL=ach-connections.js.map
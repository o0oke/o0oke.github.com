$(document).ready(function(){
// Include the UserVoice JavaScript SDK (only needed once on a page)
UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/oZOpNXpyyE6AqN2ay35Rg.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();
//
// UserVoice Javascript SDK developer documentation:
// https://www.uservoice.com/o/javascript-sdk
//
// Set colors
UserVoice.push(['set', {
  target: '#review',
  accent_color: '#448dd6',
  trigger_color: 'white',
  trigger_background_color: '#448dd6',
  position:'bottom-center',
  strings: {
    contact_title: 'Feedback step1',
    contact_message_placeholder: 'Description or screenshort and any file(optional).',
    contact_details_title: 'Feedback step2',
    email_address_label: 'A valid mail address which I can contact with you later.',
    email_address_placeholder: 'admin@evel.cn',
    contact_success_title: 'Feedback successful!',
    contact_success_body: 'I will contact with you soon, notice mail from Evel',
  },
}]);

// Identify the user and pass traits
// To enable, replace sample data with actual user traits and uncomment the line
UserVoice.push(['identify', {
  email:      'admin@evel.cn', // User��s email address
  //name:       'John Doe', // User��s real name
  //created_at: 1364406966, // Unix timestamp for the date the user signed up
  //id:         123, // Optional: Unique id of the user (if set, this should not change)
  //type:       'Owner', // Optional: segment your users by type
  //account: {
  //  id:           123, // Optional: associate multiple users with a single account
  //  name:         'Acme, Co.', // Account name
  //  created_at:   1364406966, // Unix timestamp for the date the account was created
  //  monthly_rate: 9.99, // Decimal; monthly rate of the account
  //  ltv:          1495.00, // Decimal; lifetime value of the account
  //  plan:         'Enhanced' // Plan name for the account
  //}
}]);

// Add default trigger to the bottom-right corner of the window:
UserVoice.push(['addTrigger', '#review',{ mode: 'contact', trigger_position: 'bottom-left' }]);
});
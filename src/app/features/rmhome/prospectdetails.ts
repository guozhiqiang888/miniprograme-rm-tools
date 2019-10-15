export const optionsDetials ={
  prespectName:'',
  lists:[
   {
       title:"RM status",
       titleImg:'assets/imgs/icn_User.png',
       titleImgRight:'',
       showTitle:true,
       defaultShow: true,
       list:[
            {name:'Assign RM', iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',mapping:'assignRM',value:'', placeholder:'Select RM'},
            {name: 'Status',  iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',mapping: 'status', value:'',placeholder:'Select status'},
            {name: 'Due date', iconStyle:'list-icon',
            imgSrc:'assets/imgs/icn_Calendar.png', mapping: 'dueDate', value:'', placeholder:'Calendar'},
            {name: 'Expected conversion date', iconStyle:'list-icon',
            imgSrc:'assets/imgs/icn_Calendar.png', mapping: 'expectDate', value:'', placeholder:'Calendar'},
            {name: 'Proiority', iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png', mapping: 'priority', value:'', placeholder:'Select Priority'},

            {name:'Local name', mapping:'localName', value:'',placeholder:'Enter here'},
            {name:'English name', mapping:'englishName', value:'', placeholder:'Enter here'},
            {name:'ID', mapping:'ID', value:'', placeholder:'Enter here'},
            {name:'Sales revenue', mapping:'Salesrevenue', value:'', placeholder:'Enter here'},
            {name:'Registered Capital', mapping:'RegisteredCapital', value:'', placeholder:'Enter here'},
            {name:'Number of employees', mapping:'Numberofemployees', value:'', placeholder:'Enter here'},
            {name:'Industry', mapping:'Industry', value:'', placeholder:'Enter here'},
            {name:'Phone', mapping:'Phone',  value:'',placeholder:'Enter here'},
            {name:'Website', mapping:'Website', value:'', placeholder:'Enter here'},
       ]
    },
    {
       title:"Contact information",
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_User_staff.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
           {name:'Chinese name', mapping:'chineseName', value:'', placeholder:'Enter here'},
           {name: 'English name', mapping: 'englishName', value:'', placeholder:'Enter here'},
           {name: 'Personal title', mapping: 'personalTitle', value:'', placeholder:'Enter here'},
           {name: 'Gender', mapping: 'gender', value:'', placeholder:'Enter here'},
           {name: 'Primary contact number', mapping: 'primaryNumber',  value:'',placeholder:'Enter here'},
           {name: 'Secondary contact number', mapping: 'secondNumber',  value:'',placeholder:'Enter here'},
           {name: 'Primary email address', mapping: 'primaryEmail', value:'', placeholder:'Enter here'},
           {name: 'Secondary enail address', mapping: 'secondEmail', value:'', placeholder:'Enter here'},
           {name: 'Contact address', mapping: 'contactAddress',  value:'',placeholder:'Enter here'},
           {name: 'Contact country', mapping: 'contactCountry', value:'', placeholder:'Enter country'},
           {name: 'Contact province', mapping: 'contactProvience', value:'', placeholder:'Enter province'},
           {name: 'HUB customer code', mapping: 'hubCode', value:'', placeholder:'Enter code'},
           {name: 'Referral event', mapping: 'referralEvent', value:'', placeholder:'Enter referral'}
       ]
     },
     {
       title: 'Internal information',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Account.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
          {name: 'Financing info', mapping: 'financingInfo', value:'', placeholder:'Enter info'},
          {name: 'Customs info', mapping: 'customInfo', value:'', placeholder:'Enter info'},
          {name: 'Registration type', mapping: 'registrationType', value:'', placeholder:'Enter type'},
          {name: 'is existion AMH customer', mapping: 'isAMHcustomer', value:'', placeholder:'Enter referral'},
          {name: 'Anchor company relationship', mapping: 'anchorRelationship', value:'', placeholder:'Enter referral'},
          {name: 'Anchor company local name', mapping: 'anchorLocalName', value:'', placeholder:'Enter referral'},
          {name: 'Anchor company english name', mapping: 'anchorEnglishName', value:'', placeholder:'Enter referral'},
          {name: 'Anchor RM', mapping: 'anchorRM', value:'', placeholder:'Enter referral'},
          {name: 'Existion customer segment', mapping: 'extCustomerSegment', value:'', placeholder:'Enter referral'},
          {name: 'Overseas inverstment enterprises', mapping: 'overseasInverstmentEnterprises',  value:'',placeholder:'Enter referral'},
          {name: 'Current financing stage', mapping: 'currentFinancingStage', value:'', placeholder:'Enter referral'},
          {name: 'Key product name', mapping: 'keyProduceName',  value:'',placeholder:'Enter referral'},
          {name: 'HUB customer code', mapping: 'hubCode', value:'', placeholder:'Enter referral'}
        ]
     },{
      title: 'Key person',
      iconStyle: "icon-down",
      titleImg:'assets/imgs/icn_User.png',
      titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
      showTitle:false,
      defaultShow: false,
      list:[
        {name: 'Local name', mapping: 'localName', value:'', placeholder:'Enter name'},
        {name: 'English name', mapping: 'englishName', value:'', placeholder:'Enter name'},
        {name: 'Contact personal title', mapping: 'contactPersonalTitle', value:'', placeholder:'Enter title'},
        {name: 'Gender', mapping: 'gender', value:'', placeholder:'Enter Gender'},
        {name: 'City', mapping: 'city', value:'', placeholder:'Enter city'}
      ]
    },{
       title: 'Activity',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Contact_chat.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
        {name: 'Comments', mapping: '', value:'', placeholder:'Enter  comments'}
        ]
     }
  ]
}
export const apiServiice={
    rmhome:{
        url:"",
        errors:{
            "WCE-401":""
        }
    },
    prospectList:{
        url: '/weconnectapp/v1/prospects',
        errots:{
            '001':'This IP address has no access',
            '002':'The signature is invalid',
            '003':'Prospect ID cannot be found',
            '004':'Mandatory field is missing',
            '005':'Parameter is incorrect',
            '006':'API Request failed to executed'
        }
    },
    prospectDetail:{
        url: '/demo/prospect/getDetailTest/{tid}',
        errots:{
            '001':'This IP address has no access',
            '002':'The signature is invalid',
            '003':'Prospect ID cannot be found',
            '004':'Mandatory field is missing',
            '005':'Parameter is incorrect',
            '006':'API Request failed to executed'
        }
    }
}
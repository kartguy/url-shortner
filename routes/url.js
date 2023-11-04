const express=require('express');

const{
    handlePostUrl,
    handleGetAnalytics
}=require('../controllers/url')

const router=express.Router();

router.post('/',handlePostUrl);

router.get('/Analytics/:shortId',handleGetAnalytics)

module.exports=router;
describe('ICMS', function(){
    require('./helper.js').cookies();

    beforeEach(function(){
        browser.get(browser.params.BASE_CALC_URL + 'calculoicms');
    })
})
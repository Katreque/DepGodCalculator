module.exports = {
    cookies:function(){
        beforeAll(function(){
                browser.driver.get(browser.params.BASE_CALC_URL);

                browser.driver.manage().addCookie({
                                                name: "passaporte-chave-DEV",
                                                value: browser.params.chaveDev,
                                                domain: browser.params.dominioDev,
                                            })

                browser.driver.manage().addCookie({
                                                name: "passaporte-token-DEV",
                                                value: browser.params.tokenDev,
                                                domain: browser.params.dominioDev,
                                            })
        })
    }
}

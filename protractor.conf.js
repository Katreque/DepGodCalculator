exports.config = {
    framework: 'jasmine',
    //seleniumServerJar: './node_modules/protractor/bin/webdriver-manager update',
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['./test/e2e/**/*_spec.js'],

    suites:{
        home: './test/e2e/home_spec.js',
        cabecalho: './test/e2e/cabecalho_spec.js',
        icmsProprio: './test/e2e/icmsProprio_spec.js',
        icmsRed: './test/e2e/icmsRed_spec.js',
        icmsDifal: './test/e2e/icmsDifal_spec.js',
        stProprio: './test/e2e/stProprio_spec.js',
        ipiProprio: './test/e2e/ipiProprio_spec.js',
    },

    params: {
        BASE_CALC_URL: 'https://calculadora-dev.alterdata.com.br:1307/',
        chaveDev: "Ts3WVx6Tv8NeZXH_YFI3z0RmrjlS09dv80PL2OAH70DmGSqbKl56OwufHvLVGTMT1A-7ZLZ9UWi0WfWIJJSb5YG0FulAL3k15JxNntvMNKhu5E6AhfqmGzNe_8-tDhPsOVAeTUGjgwPRFsD4_OVUOFaCRUApbwXSmS_XKQznq1LGD2KSghk4YdDHxAvHbjRmRjf_AV64YiTASrxEf7MX-U4eItA4GI8r5JwawvvwyC3dDKq94-da9RYwa7ycg0DJRlxqKcksRUp5RQeVJZ5qMEthcn0GHp39idKL0r2Mwht_sRD3I7KC4rKl3htDXGiQk2X0hPBh7qZ3LQvHOGxbJw",
        tokenDev: "-DK9wlm_0aaVRC0o0lDaqcgfNClI3ZsM2F_EaKqqJC6xueabkLHOJnTwykFdjSyw7F3ct7kCwcLsF-fYYF1T6X4TYsP1Mcn2IgQHrB020lLBODQDnMRIYqBw0RBevZYWZb3C5GkkfZWgtYDAMMnCsnjJGsswpkFjmVx1e9-wN1Dk_gcFzcMhAlk-xqMXMTXuOIitzfYHzlzeOj5i5L9hzk-HDEWtdoS7C63dX33Hea_rx0KgFUb6-52bosV1E3tW-xvTYPc1991Ooih148wOrrUFzC8OH2meQTFFi594ZYXJLt-BMDg0LPfeM9F2QK9fcI6L3MaO2IR3BnZHsfOQp1nEhMchvlJfo_xjQBtkG7jB74A0SiuJUcJ4FYpFx-k7xxD7IGOcKqjpgByKUOT9zcPbZ5-uR_CMigw_uutAI14kXdVdlC6u_D5uAGE_hSrLHDTcGWgc5SlRhsh81UU9JAmLDy0",
        dominioDev: '.alterdata.com.br',
    }
}

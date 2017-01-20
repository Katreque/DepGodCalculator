describe('controladorHome', function(){
    var BASE_PASSAPORTE_AUTH = 'https://calculadora-dev.alterdata.com.br:1307/';
    var _chaveDev = "nDCa3Oyl42VDXGNs8gVdvN7kVW4Gtqsp90GCQMYwpoMk41TVYTkFwgr_QVfo-OBZ8WKt8HPM5tMUTymsQPfm4_6qHk7UikhzK0zzK9wALPkTut8LgxnTSxhrJzMdTO1MMtH38hGJ7fJ6wx2Pfn3VgGz9bwoI0gBrhFIuqUyU7gjzTECoKLQjK3kpxrUzXGvlBR48_Yc-bMlUMyrRMsxyDOc6HaRzqzRPh3EtgPGnk-Hsk54DI8z2B0P_ephCoVRTFwDd2pObBnBl_a6z_KMJDKKndVY5iW8-NEbd3abtJGdUdechGuU4fqrfdhFjjNSa_AJTXl_CJHklTYmTiQXDpA";
    var _tokenDev = "AuZkEu7Yz3OZTOlaMm782qsOv78tXsbW5btRz_ss7UH5xfx5O-DtwsVp1170tOfwUdtiYBWdOQ4wOceZTqkZxWmi-GP5EEy7vm0BYu-aGfldx7jnFdW8LXfgZ-3uNUqxSda0kVjDyahYOdQr-xI23lQNHRz6H4fki40o3T1IMYb7prK3F7mWrHUNgV8bgTskNQb3SzEsl7suP1l-7Pr8-GioPUNuf_XRxui3ZywUbI_lxOX4JcU5CjCHJ8PVtPZFiH4D52KFts3EXbeuTTI1S83b85cfKS5X-ttKSyyWqCsllAmOrsroWYEbeMsuxhveAFhGsQ-I5x0ks4m7fEiJlGWpXqWJRNW_5tsNk1iRHnaFx6qp1hKSFERDWKy5JUHx4Ra7rAIaeXyJxN8Jj8UQWNsg_Hiv-JsOgflDdos-Wu3V2uoW2HQaNNTKbUyLQn7MMLPpR-fVvyajCrPhjRzm09pYhH0"

    beforeEach(function(){
        browser.driver.get(BASE_PASSAPORTE_AUTH + 'home');
        browser.manage().addCookie("passaporte-chave-DEV", "_chaveDev");
        browser.manage().addCookie("passaporte-token-DEV", "_tokenDev");
    })

    it('Verifica se o botão ICMS está levando para a página correta.', function(){
        browser.get(BASE_PASSAPORTE_AUTH + 'home');

        element(by.id('botaoIcms')).click();

        expect(browser.getCurrentUrl()).toEqual(BASE_PASSAPORTE_AUTH + 'calculoicms');
    })
})
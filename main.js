cc.game.onStart = function(){
    cc.view.enableRetina(false);
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(480,320,cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    cc.director.setProjection(cc.Director.PROJECTION_2D);

    if (cc.sys.isNative) {
        var searchPaths = jsb.fileUtils.getSearchPaths();
        searchPaths.push('script');
        if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_OSX) {
            searchPaths.push("res");
            searchPaths.push("src");
        }
        jsb.fileUtils.setSearchPaths(searchPaths);
    }
    //load resources
    cc.LoaderScene.preload(g_resources, function () {

        /*cc.plugin.asset.AssetManager.addImage( cc.plugin.asset.AssetManager._resources[ res.arial_14_png ], res.arial_14_png );
                cc.plugin.asset.AssetManager.createSpriteFontFromGlypthDesigner(
                    res.arial_14_fnt,
                    res.arial_14_png,
                    cc.plugin.asset.AssetManager._resources[ res.arial_14_fnt ] );*/
        cc.director.runScene(new MenuScene());
    }, this);
};

cc.game.run();
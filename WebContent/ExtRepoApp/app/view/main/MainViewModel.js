Ext.define('ExtRepoApp.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainViewModel',
    stores: {
    		orgDataStore: {
            type: 'orgDataStore'
        },
        reposDataStore: {
            type: 'reposDataStore'
        },
        commitsDataStore: {
            type: 'commitsDataStore'
        },
    }
});
Ext.define('ExtRepoApp.store.repo.CommitsDataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.commitsDataStore',
    storeId: 'commitsDataStore',
    autoLoad: false,
    model: 'ExtRepoApp.model.repo.CommitsDataModel',
    proxy: {
        type: 'rest'
    }
});
